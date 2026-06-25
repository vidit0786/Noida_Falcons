type TeamLogoProps = {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-24 w-24',
};

const cn = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(' ');

export default function TeamLogo({ className, showText = true, size = 'md' }: TeamLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} aria-label="Noida Falcons logo">
      <div className={cn('relative shrink-0 rounded-2xl bg-gradient-to-br from-white/15 via-falcon-blue to-black p-[1px] shadow-glow', sizes[size])}>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/72">
          <svg viewBox="0 0 96 96" className="h-[78%] w-[78%] drop-shadow-[0_0_16px_rgba(10,77,155,.75)]" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="falconMark" x1="16" x2="82" y1="8" y2="86" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="0.42" stopColor="#C0C0C0" />
                <stop offset="1" stopColor="#0A4D9B" />
              </linearGradient>
              <linearGradient id="falconWing" x1="18" x2="85" y1="70" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A4D9B" />
                <stop offset="1" stopColor="#8EC3FF" />
              </linearGradient>
            </defs>
            <path d="M13 55C34 24 58 12 86 11C75 20 62 29 49 43C61 38 72 38 84 43C67 49 53 58 43 76C38 66 28 60 13 55Z" fill="url(#falconWing)" />
            <path d="M18 54C38 37 54 27 76 21C65 31 52 44 43 61C36 57 28 55 18 54Z" fill="url(#falconMark)" />
            <path d="M52 38L71 32L59 47L76 48L52 57L41 76L39 59L24 55L42 52L52 38Z" fill="#fff" opacity="0.9" />
            <circle cx="62" cy="38" r="3" fill="#0A0A0A" />
          </svg>
        </div>
      </div>
      {showText && (
        <div className="leading-none">
          <p className="font-display text-base font-black uppercase tracking-[0.16em] text-white sm:text-lg">Noida</p>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-falcon-silver">Falcons</p>
        </div>
      )}
    </div>
  );
}
