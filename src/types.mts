interface PrayerType {
    prayer?: String,
    res: String,
}


interface PrayersType {
    prayers: Array<String>,
    res: String,
}


export type { PrayerType }
export type { PrayersType };