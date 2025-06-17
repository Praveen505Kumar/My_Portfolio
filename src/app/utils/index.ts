export const isMinimal =
  typeof window === 'undefined' ||
  window.innerWidth < 768 ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '';
  return `${basePath}${path}`;
};
