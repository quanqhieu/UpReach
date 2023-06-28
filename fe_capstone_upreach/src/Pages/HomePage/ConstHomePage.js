export const PLATFORM = [
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" },
    { value: "Youtube", label: "Youtube" },
    { value: "TikTok", label: "TikTok" }
];
export const CATEGORY = [
    { value: "Sport/Fitness", label: "Sport/Fitness" },
    { value: "Beauty", label: "Beauty" },
    { value: "Business", label: "Business" },
    { value: "Technology", label: "Technology" },
    { value: "Baby", label: "Baby" },
    { value: "Hot Face", label: "Hot Face" },
    { value: "Education", label: "Education" },
    { value: "Travel", label: "Travel" },
    { value: "Music", label: "Music" },
    { value: "Food & Drink", label: "Food & Drink" },
    { value: "Housing", label: "Housing" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Nutrition", label: "Nutrition" },
    { value: "Game", label: "Game" },
    { value: "Film", label: "Film" },
    { value: "Personal perception", label: "Personal perception" },
    { value: "Artwork", label: "Artwork" },
    { value: "Pet", label: "Pet" },
    { value: "Fashion", label: "Fashion" }
];

export const LIST_SELECT_SEARCH = [
    {
        className: "leftButton",
        options: PLATFORM,
        title: "Platform",
        description: "Choose a platform"
    },
    {
        className: "rightButton",
        options: CATEGORY,
        title: "Category",
        description: "Search for categories, keywords, hashtags or influencers"
    },
];

export const LIST_TYPE_SEARCH = [
    { name: "Celebrity", value: "Celebrity" },
    { name: "Talent", value: "Talent" },
    { name: "Professional", value: "Professional" },
    { name: "Citizen", value: "Citizen" },
    { name: "Community", value: "Community" },
]

export const LIST_CONTENT_FORMATS_SEARCH = [
    { name: "Text", value: "Text" },
    { name: "Picture", value: "Picture" },
    { name: "Video", value: "Video" },
]

// marks for slider
export const MARKS = {
    0: {
        style: {
            paddingTop: "10px",
        },
        label: <strong>0(%)</strong>,
    },
    100: {
        style: {
            paddingTop: "10px",
        },
        label: <strong>100(%)</strong>,
    },
};

export const GENDER_OF_AUDIANCE = [
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
    { name: "Other", value: "Other" },
]

export const LOCATION_OF_AUDIANCE = [
    { name: "Hà Nội", value: "Hà Nội" },
    { name: "Hồ Chí Minh", value: "Hồ Chí Minh" },
    { name: "Huế", value: "Huế" },
]
