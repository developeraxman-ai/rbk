export const eventCategories = [
  { value: "wedding", label: "Main Ceremony" },
  { value: "reception", label: "Reception" },
  { value: "engagement", label: "Engagement" },
  { value: "haldi-mehendi", label: "Haldi & Mehendi" },
  { value: "birthday", label: "Birthday Party" },
  { value: "traditional", label: "Traditional Function" },
  { value: "social", label: "Private Function" },
  { value: "corporate", label: "Corporate Event" },
];

const legacyEventCategories = [
  { value: "live", label: "Stage Function" },
  { value: "celebrity", label: "VIP Function" },
  { value: "brand", label: "Brand Function" },
  { value: "television", label: "Television Function" },
];

export const eventCategoryValues = [
  ...eventCategories.map((category) => category.value),
  ...legacyEventCategories.map((category) => category.value),
];

export function getEventCategoryLabel(value) {
  return (
    [...eventCategories, ...legacyEventCategories].find((category) => category.value === value)
      ?.label || "Function"
  );
}
