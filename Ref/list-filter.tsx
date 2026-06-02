import { CSSProperties, useState, useCallback } from "react"
import HOHOProductGrid from "https://framer.com/m/HOHOProductGrid-PEXV.js@EbWijHNTcUTz4EnJ3WBW"
import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */

const allTgids = [
    10005, 10006, 10007, 10297, 10321, 10459, 11169, 11331, 11354, 11382, 11512,
    11517, 11594, 11918, 12135, 12140, 12142, 12143, 12270, 12273, 12275, 12276,
    12277, 12279, 12319, 12332, 12355, 12383, 12386, 12387, 12394, 12395, 12400,
    12401, 12402, 12403, 12405, 12842, 13433, 13605, 1403, 1413, 1414, 14255,
]

const cities = [
    {
        Barcelona: [
            "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216",
            [3436, 7677, 8816],
        ],
    },
    {
        Singapore: [
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
            [10005, 25594, 7419, 21566, 7418, 7988, 20657, 22854, 10007, 10006],
        ],
    },
    {
        Paris: [
            "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
            [
                9774, 2895, 24780, 26765, 7302, 11169, 25083, 25082, 26369,
                24850, 26767,
            ],
        ],
    },
    {
        Rome: [
            "https://images.unsplash.com/photo-1531572753322-ad063cecc140",
            [
                9646, 10297, 10321, 15898, 23108, 3118, 17141, 17834, 14255,
                22243, 16356, 19659, 19199, 19658, 19198,
            ],
        ],
    },
    {
        London: [
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
            [
                19791, 9883, 9907, 4851, 7312, 4204, 8573, 25080, 2847, 7174,
                26623, 25412, 24018,
            ],
        ],
    },
    {
        Bangkok: [
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
            [24935, 11594],
        ],
    },
    {
        Madrid: [
            "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
            [11354, 26906],
        ],
    },
    {
        Sydney: [
            "https://images.unsplash.com/photo-1590716209211-ea74d5f63573",
            [10459, 11331, 24029],
        ],
    },
    {
        Dubai: [
            "https://images.unsplash.com/photo-1518684079-3c830dcef090",
            [7338, 11382, 9771, 11517, 7341, 7340],
        ],
    },
    {
        San_Francisco: [
            "https://images.unsplash.com/photo-1547190994-0dfe4ab1bdae",
            [
                20143, 16029, 16032, 16033, 2206, 16030, 3300, 4453, 3781, 992,
                3786,
            ],
        ],
    },
    {
        New_Orleans: [
            "https://images.unsplash.com/photo-1568693059993-a239b9cd4957",
            [19969],
        ],
    },
    {
        Hobart: [
            "https://images.unsplash.com/photo-1622263693061-4b8f4776d2d8",
            [16826, 16828, 16825],
        ],
    },
    {
        Chicago: [
            "https://images.unsplash.com/photo-1597933534024-debb6104af15",
            [20011, 23358, 1414, 1413, 1403],
        ],
    },
    {
        Valencia: [
            "https://images.unsplash.com/photo-1617122287896-8638ac5c5414",
            [21458],
        ],
    },
    {
        Istanbul: [
            "https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?q=80&w=3987",
            [18827, 19859],
        ],
    },
]

const CityCircle = ({
    imageUrl,
    cityName,
    city,
    setCity,
    onClick,
    isSelected,
    platform,
}: {
    imageUrl: string
    cityName: string
    city: string
    setCity: (string) => void
    onClick: () => void
    isSelected: boolean
    platform: "Desktop" | "Small screen" | "Tablet" | "Mobile"
}) => {
    const [isHovered, setIsHovered] = useState(false)
    // Inline styles
    const containerStyle: CSSProperties = {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        padding: platform !== "Mobile" ? "28px 0 24px" : "20px 0 10px",
        borderBottom: isSelected
            ? "3px solid #8000ff"
            : "3px solid transparent",
        userSelect: "none",
    }

    const circleStyle: CSSProperties = {
        width: platform !== "Mobile" ? "100px" : "80px",
        height: platform !== "Mobile" ? "100px" : "80px",
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        boxSizing: "border-box",
        border: isSelected ? "2.5px solid white" : "4px solid transparent", // white border when selected
        boxShadow: isSelected ? "0 0 0 2.5px #8000ff" : "", // outer #8000ff border when selected
        transition: "border 0.3s ease, box-shadow 0.3s ease",
    }

    const imageStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "opacity 0.3s ease",
    }

    const tintStyle: CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "rgba(80, 0, 128, 0.5)",
        opacity: isSelected || isHovered ? 1 : 0,
        transition: "opacity 0.3s ease",
    }

    const checkmarkStyle: CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "24px",
    }

    const labelStyle: CSSProperties = {
        marginTop: "12px",
        color: isSelected || isHovered ? "#8000ff" : "#444444",
        textAlign: "center",
        transition: "color 0.3s ease",
        fontWeight: "bold",
        fontSize: platform !== "Mobile" ? "16px" : "12px",
    }

    return (
        <div
            style={containerStyle}
            onClick={() => {
                setCity(cityName)
                onClick()
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={circleStyle}>
                <img
                    src={imageUrl.concat("?w=300")}
                    alt={cityName}
                    style={imageStyle}
                />
                <div style={tintStyle} />
                {isSelected && (
                    <div style={checkmarkStyle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M28 6.6665L11.5 23.9998L4 16.121"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}
            </div>
            <div style={labelStyle}>{cityName}</div>
        </div>
    )
}

/**
 * @param cities Array of Record of city names and corresponding image urls and tgids
 * @param city current city
 * @param setCity set current city function
 * @param setTgid set current set of tgids
 * @returns carousel of city filters
 */

const Carousel = ({ cities, city, setCity, setTgids, platform }) => {
    const scrollWidth =
        platform === "Desktop" ? 1300 : platform === "Small screen" ? 1100 : 800
    const [scrollPosition, setScrollPosition] = useState(0)
    const [activeCity, setActiveCity] = useState(-1)
    const onCityClicked = useCallback(
        (cityIndex: number, tgids: number[], activeCity: number) => {
            const isSelected = cityIndex === activeCity
            isSelected ? setActiveCity(-1) : setActiveCity(cityIndex)
            isSelected ? setTgids(allTgids) : setTgids(tgids)
        },
        []
    )

    // Define the width of each city circle and the gap between them
    const cityWidth = 120 // Adjust based on actual size
    const gap = 24 // Adjust based on actual gap size
    const containerWidth = cities.length * (cityWidth + gap) - gap // Calculate the total width of the inner container

    // Function to handle the scroll
    const handleScroll = (direction) => {
        const maxScrollPosition = containerWidth - scrollWidth - gap // Calculate the maximum scroll position based on container width
        setScrollPosition((prev) => {
            if (direction === "left") {
                return Math.max(prev - (cityWidth + gap), 0) // Ensure the scroll position doesn't go below 0
            } else {
                return Math.min(prev + (cityWidth + gap), maxScrollPosition) // Ensure the scroll doesn't go past the maximum
            }
        })
    }

    const canScrollLeft = scrollPosition > 0 // Check if we can scroll left
    const canScrollRight = scrollPosition < containerWidth - scrollWidth - gap // Check if we can scroll right

    const carouselContainerStyle: CSSProperties = {
        width: "100%",
        overflow: platform !== "Mobile" ? "hidden" : "scroll",
        msOverflowStyle: "none", // IE and Edge
        scrollbarWidth: "none", // Firefox
        position: "relative",
        margin: "auto",
        maxWidth: "1248px",
        paddingLeft: "24px",
        paddingRight: "24px",
    }

    const carouselInnerStyle: CSSProperties = {
        width: "100%",
        display: "flex",
        gap: platform !== "Mobile" ? "32px" : "12px",
        transition: "transform 0.3s ease",
    }

    const carouselButtonStyle: CSSProperties = {
        position: "absolute",
        top: "42%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
    }

    const carouselButtonLeftStyle: CSSProperties = {
        left: "20px",
    }

    const carouselButtonRightStyle: CSSProperties = {
        right: "20px",
    }

    const carouselButtonDisabledStyle: CSSProperties = {
        opacity: 0,
        cursor: "default",
    }

    const carouselFadeStyle: CSSProperties = {
        position: "absolute",
        top: 0,
        width: "100px",
        height: "100%",
        zIndex: 5,
        pointerEvents: "none",
    }

    const carouselFadeLeftStyle: CSSProperties = {
        left: 0,
        background:
            "linear-gradient(to right, rgba(248, 246, 255,1), rgba(248, 246, 255,0))",
    }

    const carouselFadeRightStyle: CSSProperties = {
        right: 0,
        background:
            "linear-gradient(to left, rgba(248, 246, 255,1), rgba(248, 246, 255, 0))",
    }

    return (
        <div style={carouselContainerStyle}>
            <div
                style={{
                    maxWidth: "1200px",
                }}
            >
                <button
                    onClick={() => handleScroll("left")}
                    disabled={!canScrollLeft}
                    style={{
                        ...carouselButtonStyle,
                        ...carouselButtonLeftStyle,
                        ...(canScrollLeft && platform !== "Mobile"
                            ? {}
                            : carouselButtonDisabledStyle),
                    }}
                >
                    {canScrollLeft && platform !== "Mobile" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_19_9577)">
                                <path
                                    d="M11.334 1.33317L4.66732 7.99984L11.334 14.6665"
                                    stroke="#444444"
                                    stroke-width="1.47343"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_19_9577">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                </button>
                <div
                    style={{
                        ...carouselInnerStyle,
                        transform: `translateX(-${scrollPosition}px)`,
                    }}
                >
                    {cities.map((city, index) => {
                        const cityName = Object.keys(city)[0]
                        const value = city[cityName]
                        const imageUrl = value[0]
                        const tgidList = value[1]
                        return (
                            <CityCircle
                                key={index}
                                cityName={cityName.split("_").join(" ")}
                                imageUrl={imageUrl}
                                city={city}
                                setCity={setCity}
                                isSelected={activeCity === index}
                                onClick={() =>
                                    onCityClicked(index, tgidList, activeCity)
                                }
                                platform={platform}
                            />
                        )
                    })}
                </div>
                <button
                    onClick={() => handleScroll("right")}
                    disabled={!canScrollRight}
                    style={{
                        ...carouselButtonStyle,
                        ...carouselButtonRightStyle,
                        ...(canScrollRight && platform !== "Mobile"
                            ? {}
                            : carouselButtonDisabledStyle),
                    }}
                >
                    {canScrollRight && platform !== "Mobile" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M4.66699 1.33341L11.3337 8.00008L4.66699 14.6667"
                                stroke="#444444"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
                {canScrollLeft && platform !== "Mobile" && (
                    <div
                        style={{
                            ...carouselFadeStyle,
                            ...carouselFadeLeftStyle,
                        }}
                    ></div>
                )}
                {canScrollRight && platform !== "Mobile" && (
                    <div
                        style={{
                            ...carouselFadeStyle,
                            ...carouselFadeRightStyle,
                        }}
                    ></div>
                )}
            </div>
        </div>
    )
}

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Products({ columns, gap, platform }) {
    const [tgids, setTgids] = useState(allTgids)
    const [city, setCity] = useState("")

    const changeCity = useCallback(() => {
        setCity(city)
        cities
    }, [])

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <Carousel
                    cities={cities}
                    city={city}
                    setCity={setCity}
                    setTgids={setTgids}
                    platform={platform}
                />
            </div>
            <HOHOProductGrid
                isMobile={platform === "Mobile"}
                columns={columns}
                rows={1}
                gap={gap}
                tgids={tgids}
            />
        </div>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle: CSSProperties = {
    height: "100%",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    gap: "36px",
    position: "relative",
}

const filterContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "28px",
}

const innerContainerStyle: CSSProperties = {
    backgroundColor: "#f8f6ff",
    width: "100%",
}

addPropertyControls(Products, {
    platform: {
        type: ControlType.Enum,
        defaultValue: "Desktop",
        displaySegmentedControl: true,
        segmentedControlDirection: "vertical",
        options: ["Desktop", "Small screen", "Tablet", "Mobile"],
        optionTitles: ["Desktop", "Small screen", "Tablet", "Mobile"],
    },
    columns: {
        type: ControlType.Number,
        defaultValue: 4,
        min: 1,
        max: 4,
        displayStepper: true,
    },
    gap: {
        type: ControlType.Number,
        defaultValue: 24,
        min: 12,
        max: 48,
    },
})
