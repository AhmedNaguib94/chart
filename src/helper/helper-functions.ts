export const formatChartData = (data: any) => {
    return data?.map((item: any) => {
        return {
            x: item.Date,
            y: [item.Open, item.High, item.Low, item.Close] 
        }
    })
}