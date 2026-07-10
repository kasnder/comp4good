/** Build-time generated image variants for the lab's small logos and portraits. */
export function imageVariant(src: string, width: 96 | 192): string {
  const dot = src.lastIndexOf('.');
  return `${src.slice(0, dot)}-${width}${src.slice(dot)}`;
}

export function imageSrcset(src: string): string {
  return `${imageVariant(src, 96)} 96w, ${imageVariant(src, 192)} 192w`;
}
