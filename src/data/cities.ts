import type { City } from "@/types"

// Verbatim from Ref/list-filter.tsx — city → [imageUrl, tgids[]]
export const allTgids = [
  10005, 10006, 10007, 10297, 10321, 10459, 11169, 11331, 11354, 11382, 11512,
  11517, 11594, 11918, 12135, 12140, 12142, 12143, 12270, 12273, 12275, 12276,
  12277, 12279, 12319, 12332, 12355, 12383, 12386, 12387, 12394, 12395, 12400,
  12401, 12402, 12403, 12405, 12842, 13433, 13605, 1403, 1413, 1414, 14255,
]

export const cities: City[] = [
  {
    name: "Barcelona",
    displayName: "Barcelona",
    imageUrl: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216",
    tgids: [3436, 7677, 8816],
  },
  {
    name: "Singapore",
    displayName: "Singapore",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    tgids: [10005, 25594, 7419, 21566, 7418, 7988, 20657, 22854, 10007, 10006],
  },
  {
    name: "Paris",
    displayName: "Paris",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    tgids: [9774, 2895, 24780, 26765, 7302, 11169, 25083, 25082, 26369, 24850, 26767],
  },
  {
    name: "Rome",
    displayName: "Rome",
    imageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140",
    tgids: [9646, 10297, 10321, 15898, 23108, 3118, 17141, 17834, 14255, 22243, 16356, 19659, 19199, 19658, 19198],
  },
  {
    name: "London",
    displayName: "London",
    imageUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    tgids: [19791, 9883, 9907, 4851, 7312, 4204, 8573, 25080, 2847, 7174, 26623, 25412, 24018],
  },
  {
    name: "Bangkok",
    displayName: "Bangkok",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    tgids: [24935, 11594],
  },
  {
    name: "Madrid",
    displayName: "Madrid",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
    tgids: [11354, 26906],
  },
  {
    name: "Sydney",
    displayName: "Sydney",
    imageUrl: "https://images.unsplash.com/photo-1590716209211-ea74d5f63573",
    tgids: [10459, 11331, 24029],
  },
  {
    name: "Dubai",
    displayName: "Dubai",
    imageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    tgids: [7338, 11382, 9771, 11517, 7341, 7340],
  },
  {
    name: "San Francisco",
    displayName: "San Francisco",
    imageUrl: "https://images.unsplash.com/photo-1547190994-0dfe4ab1bdae",
    tgids: [20143, 16029, 16032, 16033, 2206, 16030, 3300, 4453, 3781, 992, 3786],
  },
  {
    name: "New Orleans",
    displayName: "New Orleans",
    imageUrl: "https://images.unsplash.com/photo-1568693059993-a239b9cd4957",
    tgids: [19969],
  },
  {
    name: "Hobart",
    displayName: "Hobart",
    imageUrl: "https://images.unsplash.com/photo-1622263693061-4b8f4776d2d8",
    tgids: [16826, 16828, 16825],
  },
  {
    name: "Chicago",
    displayName: "Chicago",
    imageUrl: "https://images.unsplash.com/photo-1597933534024-debb6104af15",
    tgids: [20011, 23358, 1414, 1413, 1403],
  },
  {
    name: "Valencia",
    displayName: "Valencia",
    imageUrl: "https://images.unsplash.com/photo-1617122287896-8638ac5c5414",
    tgids: [21458],
  },
  {
    name: "Istanbul",
    displayName: "Istanbul",
    imageUrl: "https://images.unsplash.com/photo-1567527259232-3a7fcd490c55",
    tgids: [18827, 19859],
  },
]
