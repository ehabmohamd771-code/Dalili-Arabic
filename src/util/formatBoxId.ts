export function formatBoxId(boxId: number): string {
    return String(boxId).padStart(3, '0');
}
