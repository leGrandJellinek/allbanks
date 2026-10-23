export function getMainImage(name: string): string {
  return new URL(`../assets/images/main/${name}`, import.meta.url).href
}

export function getIconImage(name: string): string {
  return new URL(`../assets/images/icons/${name}`, import.meta.url).href
}

export function getHeaderImage(name: string): string {
  return new URL(`../assets/images/header/${name}`, import.meta.url).href
}
