export async function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export function encodeId(id: string, name: string): string {
  return Buffer.from(`${name}::${id}`).toString('base64');
}

export function decodeId(id: string): { name: string; id: string } | undefined {
  const res = Buffer.from(id, 'base64').toString('ascii').split('::');
  if (res.length === 2) return { name: res[0], id: res[1] };
}
