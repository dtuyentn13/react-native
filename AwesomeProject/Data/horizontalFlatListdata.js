var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloud: {
        ios: "ios-cloudy",
        android: "md-cloudy"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    }
};
var horizontalFlatListData = [
    {
        hour: "1 AM",
        status: horizontalStatus.rainy,
        degrees: 57
    },
    {
        hour: "2 AM",
        status: horizontalStatus.rainy,
        degrees: 70
    },
    {
        hour: "3 AM",
        status: horizontalStatus.cloud,
        degrees: 45
    },
    {
        hour: "4 AM",
        status: horizontalStatus.rainy,
        degrees: 57
    },
    {
        hour: "5 AM",
        status: horizontalStatus.rainy,
        degrees: 87
    },
    {
        hour: "6 AM",
        status: horizontalStatus.cloud,
        degrees: 57
    },
    {
        hour: "7 AM",
        status: horizontalStatus.cloud,
        degrees: 88
    },
    {
        hour: "8 AM",
        status: horizontalStatus.sunny,
        degrees: 50
    },
    {
        hour: "9 AM",
        status: horizontalStatus.thunderstorm,
        degrees: 79
    },
    {
        hour: "10 AM",
        status: horizontalStatus.thunderstorm,
        degrees: 57
    },
]; 
export {horizontalFlatListData};
export {horizontalStatus};

