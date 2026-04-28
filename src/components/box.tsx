import { Box, Typography } from "@mui/material"
type BoxTitleType = {
    titleOne: string,
    titleTwo: string
}

const BoxTitle = ({ titleOne, titleTwo }: BoxTitleType) => {
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {titleOne}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {titleTwo}
                </Typography>
            </Box>
        </>

    )
}
export { BoxTitle }