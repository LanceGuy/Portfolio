export type AdminSection = "profile" | "projects" | "skills" | "highlights";

export async function saveAdminSection<T>(
  section: AdminSection,
  data: T
): Promise<void> {
  const response = await fetch("/api/admin/data", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ section, data }),
  });

  if (!response.ok) {
    throw new Error(`Failed to save ${section}`);
  }
}

export function upsertListItem<T>(
  list: T[],
  item: T,
  index: number | null
): T[] {
  if (index === null) {
    return [...list, item];
  }

  return list.map((current, currentIndex) =>
    currentIndex === index ? item : current
  );
}

export function removeListItem<T>(list: T[], index: number): T[] {
  return list.filter((_, currentIndex) => currentIndex !== index);
}

export function addTrimmedItem(list: string[], value: string): string[] {
  const trimmed = value.trim();
  return trimmed ? [...list, trimmed] : list;
}
