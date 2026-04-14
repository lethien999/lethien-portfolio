"use client";

import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

type AppIcon = {
  id: string;
  title: string;
  emoji: string;
};

type WindowId = 'finder' | 'notes';
type FinderSection = 'about' | 'roadmap' | 'stack' | 'skills';

type WindowState = {
  id: WindowId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
  isOpen: boolean;
  isMaximized: boolean;
  isMinimizing: boolean;
  minimizeDx: number;
  minimizeDy: number;
};

type MinimizeProfile = {
  midLift: number;
  midRotate: number;
  midScaleX: number;
  midScaleY: number;
  endScaleX: number;
  endScaleY: number;
  midClip: string;
  endClip: string;
  duration: number;
};

const dockApps: AppIcon[] = [
  { id: 'launchpad', title: 'Launchpad', emoji: '🚀' },
  { id: 'finder', title: 'Finder', emoji: '📁' },
  { id: 'notes', title: 'Notes', emoji: '📝' },
  { id: 'projects', title: 'Projects', emoji: '🧩' },
  { id: 'skills', title: 'Skills', emoji: '🛠️' },
  { id: 'contact', title: 'Contact', emoji: '💬' },
  { id: 'github', title: 'GitHub', emoji: '🐙' },
  { id: 'linkedin', title: 'LinkedIn', emoji: '💼' },
];

const launchpadApps: AppIcon[] = [
  { id: 'about', title: 'About Me', emoji: '👨‍💻' },
  { id: 'roadmap', title: 'Roadmap', emoji: '🗺️' },
  { id: 'resume', title: 'Resume', emoji: '📄' },
  { id: 'stack', title: 'Tech Stack', emoji: '⚙️' },
  { id: 'mail', title: 'Email', emoji: '✉️' },
  { id: 'github', title: 'GitHub', emoji: '🐱' },
  { id: 'linkedin', title: 'LinkedIn', emoji: '💼' },
  { id: 'notes', title: 'Notes', emoji: '📝' },
];

function TrafficLights() {
  return (
    <div className="traffic-lights">
      <span className="dot red" />
      <span className="dot yellow" />
      <span className="dot green" />
    </div>
  );
}

const initialWindows: Record<WindowId, WindowState> = {
  finder: {
    id: 'finder',
    title: 'Finder',
    x: 170,
    y: 84,
    width: 860,
    height: 468,
    z: 15,
    isOpen: true,
    isMaximized: false,
    isMinimizing: false,
    minimizeDx: 0,
    minimizeDy: 0,
  },
  notes: {
    id: 'notes',
    title: 'Notes',
    x: 360,
    y: 198,
    width: 420,
    height: 300,
    z: 16,
    isOpen: true,
    isMaximized: false,
    isMinimizing: false,
    minimizeDx: 0,
    minimizeDy: 0,
  },
};

const WINDOW_STORAGE_KEY = 'macos-portfolio-windows-v1';

const minimizeProfiles: Record<WindowId, MinimizeProfile> = {
  finder: {
    midLift: 42,
    midRotate: -4.2,
    midScaleX: 1.16,
    midScaleY: 0.84,
    endScaleX: 0.68,
    endScaleY: 0.52,
    midClip: 'polygon(10% 0%, 90% 0%, 96% 91%, 4% 91%)',
    endClip: 'polygon(42% 0%, 58% 0%, 64% 100%, 36% 100%)',
    duration: 0.4,
  },
  notes: {
    midLift: 28,
    midRotate: -2.6,
    midScaleX: 1.1,
    midScaleY: 0.9,
    endScaleX: 0.76,
    endScaleY: 0.58,
    midClip: 'polygon(12% 0%, 88% 0%, 95% 93%, 5% 93%)',
    endClip: 'polygon(45% 0%, 55% 0%, 60% 100%, 40% 100%)',
    duration: 0.34,
  },
};

export default function Home() {
  const [now, setNow] = useState(() => new Date());
  const [showLaunchpad, setShowLaunchpad] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [showAppleMenu, setShowAppleMenu] = useState(false);
  const [showControlCenter, setShowControlCenter] = useState(false);
  const [spotlightQuery, setSpotlightQuery] = useState('');
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [dockPopId, setDockPopId] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [finderSection, setFinderSection] = useState<FinderSection>('about');
  const [activeAppTitle, setActiveAppTitle] = useState('Finder');
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(initialWindows);
  const [resizing, setResizing] = useState<{
    id: WindowId;
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
  } | null>(null);

  const finderDragControls = useDragControls();
  const notesDragControls = useDragControls();
  const dragControlsById: Record<WindowId, ReturnType<typeof useDragControls>> = {
    finder: finderDragControls,
    notes: notesDragControls,
  };

  const dockButtonRefs = useRef<Partial<Record<string, HTMLButtonElement | null>>>({});
  const windowRefs = useRef<Partial<Record<WindowId, HTMLElement | null>>>({});
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem(WINDOW_STORAGE_KEY);
    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved) as Partial<Record<WindowId, Partial<WindowState>>>;
      const timer = window.setTimeout(() => {
        setWindows({
          finder: {
            ...initialWindows.finder,
            ...parsed.finder,
            id: 'finder',
            title: 'Finder',
            isMinimizing: false,
            minimizeDx: 0,
            minimizeDy: 0,
          },
          notes: {
            ...initialWindows.notes,
            ...parsed.notes,
            id: 'notes',
            title: 'Notes',
            isMinimizing: false,
            minimizeDx: 0,
            minimizeDy: 0,
          },
        });
      }, 0);
      return () => window.clearTimeout(timer);
    } catch {
      window.localStorage.removeItem(WINDOW_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    const payload: Partial<Record<WindowId, Partial<WindowState>>> = {
      finder: {
        x: windows.finder.x,
        y: windows.finder.y,
        width: windows.finder.width,
        height: windows.finder.height,
        z: windows.finder.z,
        isOpen: windows.finder.isOpen,
        isMaximized: windows.finder.isMaximized,
      },
      notes: {
        x: windows.notes.x,
        y: windows.notes.y,
        width: windows.notes.width,
        height: windows.notes.height,
        z: windows.notes.z,
        isOpen: windows.notes.isOpen,
        isMaximized: windows.notes.isMaximized,
      },
    };

    window.localStorage.setItem(WINDOW_STORAGE_KEY, JSON.stringify(payload));
  }, [windows]);

  useEffect(() => {
    if (!resizing) {
      return;
    }

    const onMouseMove = (event: MouseEvent) => {
      const widthDiff = event.clientX - resizing.startX;
      const heightDiff = event.clientY - resizing.startY;

      setWindows((prev) => ({
        ...prev,
        [resizing.id]: {
          ...prev[resizing.id],
          width: Math.max(320, resizing.startWidth + widthDiff),
          height: Math.max(220, resizing.startHeight + heightDiff),
        },
      }));
    };

    const onMouseUp = () => setResizing(null);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [resizing]);

  const playFx = (kind: 'click' | 'minimize') => {
    if (!soundEnabled || typeof window === 'undefined') {
      return;
    }

    const AudioContextCtor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextCtor) {
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextCtor();
    }

    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.value = kind === 'minimize' ? 520 : 720;
    gain.gain.value = 0.0001;

    const nowTime = ctx.currentTime;
    gain.gain.exponentialRampToValueAtTime(kind === 'minimize' ? 0.035 : 0.022, nowTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, nowTime + (kind === 'minimize' ? 0.14 : 0.09));

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(nowTime);
    osc.stop(nowTime + (kind === 'minimize' ? 0.14 : 0.09));
  };

  const dateLabel = useMemo(
    () =>
      now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    [now]
  );

  const timeLabel = useMemo(
    () => now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    [now]
  );

  const openExternal = (id: string) => {
    if (id === 'github') {
      window.open('https://github.com/lethien999', '_blank', 'noopener,noreferrer');
      return;
    }

    if (id === 'resume') {
      window.open('/cv.pdf', '_blank', 'noopener,noreferrer');
      return;
    }

    if (id === 'mail') {
      window.open('mailto:lethien19092001@gmail.com', '_blank', 'noopener,noreferrer');
      return;
    }

    if (id === 'linkedin') {
      window.open('https://www.linkedin.com/in/lethien999', '_blank', 'noopener,noreferrer');
      return;
    }

    if (id === 'projects') {
      window.open('https://github.com/lethien999?tab=repositories', '_blank', 'noopener,noreferrer');
      return;
    }

    if (id === 'skills') {
      setFinderSection('skills');
      openWindow('finder');
      return;
    }

    if (id === 'contact') {
      window.open('mailto:lethien19092001@gmail.com', '_blank', 'noopener,noreferrer');
    }
  };

  const windowList = useMemo(() => Object.values(windows), [windows]);

  const bringToFront = (id: WindowId) => {
    setWindows((prev) => {
      const maxZ = Math.max(...Object.values(prev).map((item) => item.z));
      return {
        ...prev,
        [id]: {
          ...prev[id],
          z: maxZ + 1,
        },
      };
    });
    setActiveAppTitle(id === 'finder' ? 'Finder' : 'Notes');
  };

  const openWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimizing: false,
        minimizeDx: 0,
        minimizeDy: 0,
      },
    }));
    setDockPopId(id);
    playFx('click');
    window.setTimeout(() => setDockPopId(''), 340);
    setTimeout(() => bringToFront(id), 0);
  };

  const openFinderSection = (section: FinderSection) => {
    setFinderSection(section);
    openWindow('finder');
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimizing: false,
      },
    }));
  };

  const minimizeWindow = (id: WindowId) => {
    const windowEl = windowRefs.current[id];
    const dockEl = dockButtonRefs.current[id];

    let minimizeDx = 0;
    let minimizeDy = 260;

    if (windowEl && dockEl) {
      const windowRect = windowEl.getBoundingClientRect();
      const dockRect = dockEl.getBoundingClientRect();

      minimizeDx =
        dockRect.left + dockRect.width / 2 - (windowRect.left + windowRect.width / 2);
      minimizeDy =
        dockRect.top + dockRect.height / 2 - (windowRect.top + windowRect.height / 2);
    }

    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimizing: true,
        minimizeDx,
        minimizeDy,
      },
    }));

    playFx('minimize');

    window.setTimeout(() => {
      setWindows((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          isOpen: false,
          isMinimizing: false,
          minimizeDx: 0,
          minimizeDy: 0,
        },
      }));
    }, Math.round(minimizeProfiles[id].duration * 1000));
  };

  const toggleMaximize = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
      },
    }));
    setTimeout(() => bringToFront(id), 0);
  };

  const launchById = (id: string) => {
    if (id === 'about') {
      openFinderSection('about');
      setShowSpotlight(false);
      setSpotlightIndex(0);
      return;
    }

    if (id === 'roadmap') {
      openFinderSection('roadmap');
      setShowSpotlight(false);
      setSpotlightIndex(0);
      return;
    }

    if (id === 'stack') {
      openFinderSection('stack');
      setShowSpotlight(false);
      setSpotlightIndex(0);
      return;
    }

    if (id === 'skills') {
      openFinderSection('skills');
      setShowSpotlight(false);
      setSpotlightIndex(0);
      return;
    }

    if (id === 'finder' || id === 'notes') {
      openWindow(id);
      setShowSpotlight(false);
      setSpotlightIndex(0);
      return;
    }

    openExternal(id);
    setShowSpotlight(false);
    setSpotlightIndex(0);
  };

  const spotlightItems = useMemo(() => {
    const candidates = [
      { id: 'finder', title: 'Finder Window', emoji: '📁' },
      { id: 'notes', title: 'Notes Window', emoji: '📝' },
      ...launchpadApps,
      ...dockApps,
    ];
    const query = spotlightQuery.trim().toLowerCase();
    if (!query) {
      return candidates.slice(0, 8);
    }
    return candidates.filter((item) => item.title.toLowerCase().includes(query) || item.id.includes(query));
  }, [spotlightQuery]);

  const visibleSpotlightItems = useMemo(() => spotlightItems.slice(0, 8), [spotlightItems]);
  const activeSpotlightIndex = Math.min(
    spotlightIndex,
    Math.max(visibleSpotlightItems.length - 1, 0)
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setShowSpotlight((prev) => !prev);
        setShowLaunchpad(false);
        setShowAppleMenu(false);
        setShowControlCenter(false);
      }

      if (event.key === 'Escape') {
        setShowSpotlight(false);
        setShowLaunchpad(false);
        setShowAppleMenu(false);
        setShowControlCenter(false);
        setSpotlightIndex(0);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div
      className="macos-desktop"
      onClick={() => {
        setShowAppleMenu(false);
        setShowControlCenter(false);
      }}
    >
      <div className="wallpaper-layer" />

      <header className="topbar">
        <div className="topbar-left">
          <button
            type="button"
            className="topbar-btn apple"
            onClick={(event) => {
              event.stopPropagation();
              setShowAppleMenu((prev) => !prev);
              setShowControlCenter(false);
            }}
          >
            
          </button>
          <span className="active-app">{activeAppTitle}</span>
        </div>
        <div className="topbar-right">
          <span>Wi-Fi</span>
          <span>100%</span>
          <button
            type="button"
            className="topbar-btn"
            onClick={(event) => {
              event.stopPropagation();
              setShowSpotlight(true);
              setShowAppleMenu(false);
              setShowControlCenter(false);
            }}
          >
            Search
          </button>
          <button
            type="button"
            className="topbar-btn"
            onClick={(event) => {
              event.stopPropagation();
              setShowControlCenter((prev) => !prev);
              setShowAppleMenu(false);
            }}
          >
            Control
          </button>
          <span suppressHydrationWarning>{dateLabel}</span>
          <span suppressHydrationWarning>{timeLabel}</span>
        </div>

        {showAppleMenu && (
          <div className="topbar-menu apple-menu" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setShowSpotlight(true)}>
              Spotlight Search
            </button>
            <button type="button" onClick={() => openExternal('resume')}>
              Open Resume
            </button>
            <button type="button" onClick={() => openExternal('github')}>
              GitHub Profile
            </button>
            <button
              type="button"
              onClick={() => {
                setWindows(initialWindows);
                window.localStorage.removeItem(WINDOW_STORAGE_KEY);
                setShowAppleMenu(false);
                setActiveAppTitle('Finder');
              }}
            >
              Reset Windows
            </button>
          </div>
        )}

        {showControlCenter && (
          <div className="topbar-menu control-menu" onClick={(event) => event.stopPropagation()}>
            <div>
              <strong>Display</strong>
              <span>Brightness: Auto</span>
            </div>
            <div>
              <strong>Sound</strong>
              <span>Output: Speakers</span>
            </div>
            <div>
              <strong>Network</strong>
              <span>Status: Connected</span>
            </div>
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
            >
              Sound Effects: {soundEnabled ? 'On' : 'Off'}
            </button>
          </div>
        )}
      </header>

      <main className="desktop-area">
        <aside className="desktop-icons" aria-label="Desktop shortcuts">
          <button className="desktop-icon" type="button" onClick={() => openExternal('resume')}>
            <span className="icon-visual">📄</span>
            <span>Resume</span>
          </button>
          <button className="desktop-icon" type="button" onClick={() => openExternal('github')}>
            <span className="icon-visual">🗂️</span>
            <span>Projects</span>
          </button>
        </aside>

        <AnimatePresence>
          {windowList
            .filter((windowItem) => windowItem.isOpen)
            .map((windowItem) => (
              (() => {
                const profile = minimizeProfiles[windowItem.id];

                return (
              <motion.section
                key={windowItem.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                drag={!windowItem.isMaximized}
                dragMomentum={false}
                dragListener={false}
                dragControls={dragControlsById[windowItem.id]}
                onMouseDown={() => bringToFront(windowItem.id)}
                onDragEnd={(_, info) => {
                  if (windowItem.isMaximized) {
                    return;
                  }

                  setWindows((prev) => ({
                    ...prev,
                    [windowItem.id]: {
                      ...prev[windowItem.id],
                      x: prev[windowItem.id].x + info.offset.x,
                      y: prev[windowItem.id].y + info.offset.y,
                    },
                  }));
                }}
                className={`app-window ${windowItem.id}-window ${windowItem.isMaximized ? 'window-maximized' : 'window-floating'}`}
                ref={(element) => {
                  windowRefs.current[windowItem.id] = element;
                }}
                style={{
                  zIndex: windowItem.z,
                  width: windowItem.isMaximized ? undefined : windowItem.width,
                  height: windowItem.isMaximized ? undefined : windowItem.height,
                }}
                animate={{
                  opacity: windowItem.isMinimizing ? [1, 0.95, 0.15] : 1,
                  scale: windowItem.isMinimizing ? [1, 0.78, 0.2] : 1,
                  scaleX: windowItem.isMinimizing ? [1, profile.midScaleX, profile.endScaleX] : 1,
                  scaleY: windowItem.isMinimizing ? [1, profile.midScaleY, profile.endScaleY] : 1,
                  rotate: windowItem.isMinimizing ? [0, profile.midRotate, 0] : 0,
                  borderRadius: windowItem.isMinimizing ? ['0.95rem', '1.1rem', '1.4rem'] : '0.95rem',
                  clipPath: windowItem.isMinimizing
                    ? [
                        'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        profile.midClip,
                        profile.endClip,
                      ]
                    : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  x: windowItem.isMinimizing
                    ? [
                        windowItem.x,
                        windowItem.x + windowItem.minimizeDx * 0.58,
                        windowItem.x + windowItem.minimizeDx,
                      ]
                    : windowItem.isMaximized
                      ? 0
                      : windowItem.x,
                  y: windowItem.isMinimizing
                    ? [
                        windowItem.y,
                        windowItem.y + windowItem.minimizeDy * 0.46 - profile.midLift,
                        windowItem.y + windowItem.minimizeDy,
                      ]
                    : windowItem.isMaximized
                      ? 0
                      : windowItem.y,
                }}
                transition={
                  windowItem.isMinimizing
                    ? { duration: profile.duration, ease: [0.22, 0.9, 0.2, 1], times: [0, 0.6, 1] }
                    : { type: 'spring', stiffness: 260, damping: 28 }
                }
              >
                <div
                  className="window-bar"
                  onPointerDown={(event) => {
                    if ((event.target as HTMLElement).closest('button')) {
                      return;
                    }
                    dragControlsById[windowItem.id].start(event);
                  }}
                >
                  <TrafficLights />
                  <p>{windowItem.title}</p>
                  <div className="window-controls">
                    <button type="button" onClick={() => closeWindow(windowItem.id)}>
                      Close
                    </button>
                    <button type="button" onClick={() => minimizeWindow(windowItem.id)}>
                      Minimize
                    </button>
                    <button type="button" onClick={() => toggleMaximize(windowItem.id)}>
                      {windowItem.isMaximized ? 'Restore' : 'Maximize'}
                    </button>
                  </div>
                </div>

                {windowItem.id === 'finder' && (
                  <div className="window-body finder-grid">
                    <div className="finder-sidebar">
                      <h3>Favorites</h3>
                      <ul>
                        <li>
                          <button type="button" onClick={() => setFinderSection('about')}>
                            About Me
                          </button>
                        </li>
                        <li>
                          <button type="button" onClick={() => openExternal('projects')}>
                            Projects
                          </button>
                        </li>
                        <li>
                          <button type="button" onClick={() => setFinderSection('roadmap')}>
                            Roadmap
                          </button>
                        </li>
                        <li>
                          <button type="button" onClick={() => setFinderSection('stack')}>
                            Tech Stack
                          </button>
                        </li>
                        <li>
                          <button type="button" onClick={() => setFinderSection('skills')}>
                            Skills
                          </button>
                        </li>
                        <li>
                          <button type="button" onClick={() => openExternal('contact')}>
                            Contact
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="finder-content">
                      {finderSection === 'about' && (
                        <>
                          <h1>Le Anh Thien</h1>
                          <p>
                            Backend-focused Software Engineer. I build reliable products with
                            clean architecture, automation mindset, and production discipline.
                          </p>
                          <div className="quick-stats">
                            <div>
                              <strong>3+</strong>
                              <span>Years Coding</span>
                            </div>
                            <div>
                              <strong>10+</strong>
                              <span>Projects</span>
                            </div>
                            <div>
                              <strong>24/7</strong>
                              <span>Learning Mode</span>
                            </div>
                          </div>
                        </>
                      )}

                      {finderSection === 'roadmap' && (
                        <>
                          <h1>Roadmap</h1>
                          <p>Current growth plan for 2026 and beyond.</p>
                          <ul className="finder-list">
                            <li>Deepen backend architecture with Node.js + TypeScript.</li>
                            <li>Practice system design, scalability, and observability.</li>
                            <li>Build end-to-end products with Docker and CI/CD pipelines.</li>
                            <li>Contribute to open-source projects consistently.</li>
                          </ul>
                        </>
                      )}

                      {finderSection === 'stack' && (
                        <>
                          <h1>Tech Stack</h1>
                          <p>Core tools used in my current workflow.</p>
                          <ul className="finder-list">
                            <li>Languages: TypeScript, JavaScript, Python</li>
                            <li>Backend: Node.js, Express, REST API design</li>
                            <li>Frontend: React, Next.js, Tailwind CSS</li>
                            <li>DevOps: Docker, GitHub Actions, Linux tooling</li>
                          </ul>
                        </>
                      )}

                      {finderSection === 'skills' && (
                        <>
                          <h1>Skills</h1>
                          <p>Practical capabilities applied in real projects.</p>
                          <ul className="finder-list">
                            <li>API design, validation, and error handling strategy</li>
                            <li>Database modeling, query optimization, and indexing basics</li>
                            <li>Testing mindset: unit/integration and regression checks</li>
                            <li>Team workflow: code review, issue tracking, and documentation</li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {windowItem.id === 'notes' && (
                  <div className="window-body notes-content">
                    <h2>2026 Focus</h2>
                    <ul>
                      <li>Node.js / TypeScript backend depth</li>
                      <li>System design and performance basics</li>
                      <li>DevOps workflow with Docker and CI/CD</li>
                    </ul>
                    <a href="mailto:lethien19092001@gmail.com">lethien19092001@gmail.com</a>
                  </div>
                )}

                {!windowItem.isMaximized && (
                  <div
                    className="resize-handle"
                    onPointerDown={(event) => {
                      event.stopPropagation();
                      setResizing({
                        id: windowItem.id,
                        startX: event.clientX,
                        startY: event.clientY,
                        startWidth: windowItem.width,
                        startHeight: windowItem.height,
                      });
                    }}
                  />
                )}
              </motion.section>
                );
              })()
            ))}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showSpotlight && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="spotlight"
            onClick={() => setShowSpotlight(false)}
          >
            <div className="spotlight-box" onClick={(event) => event.stopPropagation()}>
              <input
                type="text"
                placeholder="Spotlight Search"
                value={spotlightQuery}
                onChange={(event) => {
                  setSpotlightQuery(event.target.value);
                  setSpotlightIndex(0);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    setSpotlightIndex((prev) =>
                      Math.min(prev + 1, Math.max(visibleSpotlightItems.length - 1, 0))
                    );
                    return;
                  }

                  if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    setSpotlightIndex((prev) => Math.max(prev - 1, 0));
                    return;
                  }

                  if (event.key === 'Enter') {
                    event.preventDefault();
                    const picked = visibleSpotlightItems[activeSpotlightIndex];
                    if (picked) {
                      launchById(picked.id);
                    }
                  }
                }}
                autoFocus
              />
              <ul>
                {visibleSpotlightItems.map((item, index) => (
                  <li key={`${item.id}-${item.title}`}>
                    <button
                      type="button"
                      className={activeSpotlightIndex === index ? 'is-selected' : ''}
                      onClick={() => {
                        launchById(item.id);
                        setSpotlightQuery('');
                      }}
                    >
                      <span>{item.emoji}</span>
                      <span>{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {showLaunchpad && (
          <motion.section
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            className="launchpad"
            onClick={() => setShowLaunchpad(false)}
          >
            <div className="launchpad-inner" onClick={(e) => e.stopPropagation()}>
              <input type="text" placeholder="Search" aria-label="Search apps" />
              <div className="launchpad-grid">
                {launchpadApps.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    className="launchpad-app"
                    onClick={() => {
                      launchById(app.id);
                      setShowLaunchpad(false);
                    }}
                  >
                    <span>{app.emoji}</span>
                    <small>{app.title}</small>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="dock" aria-label="Dock">
        <ul>
          {dockApps.map((app) => (
            <li key={app.id} className="dock-item">
              <button
                type="button"
                title={app.title}
                className={`${dockPopId === app.id ? `dock-pop dock-pop-${app.id}` : ''}`}
                ref={(element) => {
                  dockButtonRefs.current[app.id] = element;
                }}
                onClick={() => {
                  if (app.id === 'launchpad') {
                    setShowLaunchpad((prev) => !prev);
                    setShowSpotlight(false);
                    return;
                  }

                  if (app.id === 'finder') {
                    openWindow('finder');
                    return;
                  }

                  if (app.id === 'notes') {
                    openWindow('notes');
                    return;
                  }

                  openExternal(app.id);
                }}
              >
                <span>{app.emoji}</span>
              </button>
              {(app.id === 'finder' && windows.finder.isOpen) ||
              (app.id === 'notes' && windows.notes.isOpen) ? (
                <i className="dock-indicator" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
