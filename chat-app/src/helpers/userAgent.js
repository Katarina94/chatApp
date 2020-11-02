export function isMobile() {
  return (
    navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i) !== null
  );
}
