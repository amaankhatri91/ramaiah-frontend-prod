const audioTracks = [
  {
    id: 1,
    title: "Right care is given to the Right patient at the Right time",
    slug: "accident-emergency",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Sample Track 2",
    slug: "anaesthesiology",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Sample Track 3",
    slug: "cardiothoracic-surgery",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Sample Track 4",
    slug: "bone-marrow-transplantation-auto-immune-diseases",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    title: "Right care is given to the Right patient at the Right time",
    slug: "international-patients",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 6,
    title: "Right care is given to the Right patient at the Right time",
    slug: "cardiology",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 7,
    title: "Right care is given to the Right patient at the Right time",
    slug: "center-for-rehabilitation",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 8,
    title: "Right care is given to the Right patient at the Right time",
    slug: "critical-care-medicine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 9,
    title: "Right care is given to the Right patient at the Right time",
    slug: "dermatology-cosmetology",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 10,
    title: "Right care is given to the Right patient at the Right time",
    slug: "endocrinology",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 10,
    title: "Right care is given to the Right patient at the Right time",
    slug: "ent",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 10,
    title: "Right care is given to the Right patient at the Right time",
    slug: "general-medicine",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 10,
    title: "Right care is given to the Right patient at the Right time",
    slug: "general-surgery",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];


export function getaudioTracksPage(slug) {
  return audioTracks.find((dept) => dept.slug === slug);
}