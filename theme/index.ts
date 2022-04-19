import { extendTheme } from "@chakra-ui/react";

import { colors, breakpoints, fonts } from "./utilities";

const theme = extendTheme({
    colors,
    breakpoints,
    fonts,
    components: {
        // Steps
    },
});


export default theme;