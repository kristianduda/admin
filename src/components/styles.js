const getSharedStyles = (theme) => ({
    ...generateSpacings(theme),
    ...generateUtils(theme),
    // ---------- grid
    container: {
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        maxWidth: '1300px',
        margin: '0 auto'
        // [theme.breakpoints.up('md')]: {
        //     paddingLeft: '1.25rem',
        //     paddingRight: '1.25rem',
        // },
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flexGrow: {
        flexGrow: 1
    },
    flexWrap: {
        '-ms-flex-wrap': 'wrap!important',
        flexWrap: 'wrap!important',
    },
    // ---------- rounded
    roundedSm: {
        borderRadius: '0.25rem',
    },
    roundedMd: {
        borderRadius: '0.5rem',
    },
    roundedLg: {
        borderRadius: '0.75rem',
    },   
    // ---------- bg colors
    bgWhite: {
        background: 'white',
    },
    bg300: {
        background: '#F3F3F3',
    },
    bgLight: {
        background: '#F2F2F2',
    },
    bgDark: {
        background: '#ECECEC',
    },
    bgPrimary: {
        background: theme.palette.primary.main,
    },
    bgSecondary: {
        background: theme.palette.secondary.main,
    },
    bgGray10: {
        background: '#F8F9FB'
    },
    // ---------- text colors
    textWhite: {
        color: '#fff'
    },
    textPrimary: {
        color: theme.palette.primary.main,
    },
    textSecondary: {
        color: theme.palette.secondary.main,
    },
    textSecondaryLight: {
        color: '#A4B1C4'
    },
    textError: {
        color: 'red',
        marginLeft: '0'
    },
    textGray10: {
        color: '#F8F9FB'
    },
    textGray50: {
        color: '#E4EAF3'
    },
    textGray100: {
        color: '#C8D2E1'
    },
    textGray200: {
        color: '#A4B1C4'
    },
    textGray300: {
        color: '#8290A5'
    },
    textGray400: {
        color: '#68778D'
    },
    textGray500: {
        color: '#56667D'
    },
    textGray600: {
        color: '#47556A'
    },
    textGray700: {
        color: '#394558'
    },
    textGray800: {
        color: '#2B3545'
    },
    textGray900: {
        color: '#0F172A'
    },
    textOrange400: {
        color: '#FB923C!important'
    },
    textOrange600: {
        color: '#EA580C!important'
    },

    // ---------- text utils    
    uppercase: {
        textTransform: 'uppercase'
    }, 
    capitalize: {
        textTransform: 'capitalize'
    }, 
    textMono: {
        fontFamily: "'IBM Plex Mono', monospace",
    }, 
    textSans: {
        fontFamily: "'IBM Plex Sans'",
    },
    underline: {
        textDecoration: 'underline',
    },
    noUnderline: {
        textDecoration: 'none',
    },
    wordBreak: {
        wordBreak: 'break-word'
    },
    noWrap: {
        whiteSpace: 'nowrap'
    },
    redLink:{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '14px',
        lineHeight: '130%',
        color: theme.palette.primary.main,
        fontWeight: '700',
        textDecoration: 'underline',
        textTransform: 'uppercase'
    },
    basicLink: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
        boxShadow: 'none',
        outline: 'none!important'
    },
    // ---------- text sizes
    textBase: {
        fontSize: '16px',
        lineHeight: '130%',
    },
    textM: {
        fontSize: '14px',
        lineHeight: '130%',
    },
    textS: {
        fontSize: '12px',
        lineHeight: '130%',
    },
    textXs: {
        fontSize: '10px',
        lineHeight: '130%',
    },

    textXl: {
        lineHeight: '120%',
        letterSpacing: '-1px',
        fontSize: '50px',
        fontWeight: 600,
    },
    textH1: {
        lineHeight: '120%',
        letterSpacing: '-1px',
        fontSize: '40px',
        fontWeight: 600,
    },
    textH2: {        
        lineHeight: '120%',
        letterSpacing: '-0.5px',
        fontSize: '32px',
        fontWeight: 600,
    },
    textH3: {
        lineHeight: '120%',
        letterSpacing: '-0.5px',
        fontSize: '24px',
        fontWeight: 600,
    },
    textH4: {
        lineHeight: '120%',
        letterSpacing: '-0.5px',
        fontSize: '20px',
        fontWeight: 600,
    },   
    textBlock: {
        lineHeight: '150%'
    },
    //text color
    text200: {
        color: 'rgba(51,52,66,0.5)',
    },
    text300: {
        color: 'rgba(51,52,66,0.7)',
    },
    text400: {
        color: '#333442',
    },
    textEl250: {
        color: '#A4B1C4',
    },
    // ---------- font weights
    fontRegular: {
        fontWeight: 400,
    },
    fontMedium: {
        fontWeight: 500,
    }, 
    fontSemibold: {
        fontWeight: 600,
    },     
    fontBold: {
        fontWeight: 700,
    },    
    // ---------- utils
    overflowHidden: {
        overflow: 'hidden'
    },
    hrLine: {
        border: 0,
        borderBottom: '1px solid #C8D2E1',
    },
    positionRelative: {
        position: 'relative',
    },
    positionAbsolute: {
        position: 'absolute',
    },
    mlAuto: {
        marginLeft: 'auto',
    },
    mrAuto: {
        marginRight: 'auto',
    },
    mtAuto: {
        marginTop: 'auto',
    },
    w100: {
        width: '100%',
    },
    w50:{
        width: '50%',
    },    
    h100: {
        height: '100%',
    },
    h50: {
        height: '50%',
    },
    dBlock: {
        display: 'block',
    },
    dBlockInline: {
        display: 'block-inline',
    },    
    alignItemsCenter: {
        alignItems: 'center'
    },
    alignItemsStart: {
        alignItems: 'flex-start'
    },
    alignItemsEnd: {
        alignItems: 'flex-end'
    }, 
    alignItemsStretch: {
        alignItems: 'stretch'
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    carouselFullwidth: {
        marginRight: '-1.25rem',
        marginLeft: '-1.25rem',        
    },
    carouselSpacing: {
        '& .flickity-viewport': {            
        },
        '& .carousel-cell:first-child': {
            paddingLeft: '1.25rem'
        },
        '& .carousel-cell:last-child': {
            paddingRight: '1.25rem',
        },
        '& .carousel-cell': {
            marginRight: '1rem'
        },
    },   
    loaderCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },   
    gridLinesWrapper: {
        [theme.breakpoints.up("lg")]: {
            position:'fixed',
            height: '100%',
            width: '100%',
            top: '0',  
            zIndex: '-10',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            maxWidth: '1300px',
            margin: '0 auto',
            left: '0',
            right: '0',
            '&:after': {
                content: "''",
                display: 'block',           
                backgroundImage: `url('/img/grid-lines.png')`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: 'contain',
                position: 'absolute',
                height: '100%',
                //width: 'calc(100% - 2.5rem)',
                width: '50%',
                // width: 'calc(50% - 1.25rem)',
                top: '0',
                right: 'calc(1.25rem + 8.1%)',
                zIndex: '-10',
                opacity: '0.85'
            },            
        },
    },
    gridLinesWrapper2: {
        [theme.breakpoints.up("lg")]: {
            position:'fixed',
            height: '100%',
            width: '100%',
            top: '0',  
            zIndex: '-10',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            maxWidth: '1300px',
            margin: '0 auto',
            left: '0',
            right: '0',
            '&:after': {
                content: "''",
                display: 'block',           
                backgroundImage: `url('/img/grid-lines.png')`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: 'contain',
                position: 'absolute',
                height: '100%',
                //width: 'calc(100% - 2.5rem)',
                width: '50%',
                // width: 'calc(50% - 1.25rem)',
                top: '0',
                right: 'calc(1.25rem + 16.1%)',
                zIndex: '-10',
                opacity: '0.85'
            },            
        },
    },
    zIndexTop: {
        zIndex: '10',
    },
    noOutline: {
        outline: 'none!important'
    },
    noUserSelect: {
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        OUserSelect: "none",
        userSelect: "none",
    },
    noTapHighlight: {
        '-webkit-tap-highlight-color': 'transparent'
    },
    // ---------- card
    cardShadow: {
        boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.08)",
    },
    // ---------- shadows
    shadowTiny: {
        boxShhadow: '0px 1px 3px rgba(0, 0, 0, 0.14)',
    },
    shadowSmall: {
        boxShhadow: '2px 4px 10px 2px rgba(0, 0, 0, 0.07)',
    },
    shadowMedium: {
        boxShhadow: '0px 7px 20px 4px rgba(0, 0, 0, 0.08)',
    },
    shadowLarge: {
        boxShhadow: '8px 8px 50px 4px rgba(0, 0, 0, 0.2)',
    },
    shadowXl: {
        boxShhadow: '0px 16px 64px rgba(0, 0, 0, 0.06), 0px 12px 24px rgba(0, 0, 0, 0.04), 0px 6px 8px rgba(0, 0, 0, 0.02), 0px 2px 8px 2px rgba(0, 0, 0, 0.08)',
    },
    shadowXxl: {
        boxShhadow: '0px 16px 64px rgba(0, 0, 0, 0.06), 0px 12px 24px rgba(0, 0, 0, 0.04), 0px 6px 8px rgba(0, 0, 0, 0.02)',
    },
    // ---------- images
    imageFit: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',        
        objectFit: 'cover',
    },
    imageFitHolder: {
        position: 'relative',
        overflow: 'hidden',
    }   
    // ----------
    
})

const spacings = [  
    '0rem',  
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '7rem',
    '10rem',
]

const generateSpacings = (theme) => {
    let ret = {};

    let keys = [...theme.breakpoints.keys];
    keys.unshift("")

    keys.forEach(key => {
        spacings.forEach((x, index) => { 
            
            //margin   
            ret[`mt${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        marginTop: x+'!important',
                    }} : {marginTop: x+'!important',}
                )                
            };
            ret[`mr${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        marginRight: x+'!important',
                    }} : {marginRight: x+'!important',}
                )                
            };
            ret[`mb${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        marginBottom: x+'!important',
                    }} : {marginBottom: x+'!important',}
                )               
            };
            ret[`ml${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        marginLeft: x+'!important',
                    }} : {marginLeft: x+'!important',}
                )                
            };
            ret[`m${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        margin: x+'!important',
                    }} : {margin: x+'!important',}
                )                 
            };
            ret[`my${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        marginTop: x+'!important',
                        marginBottom: x+'!important',
                    }} : {marginTop: x+'!important', marginBottom: x+'!important',}
                )                
            };
            ret[`mx${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        marginLeft: x+'!important',
                        marginRight: x+'!important',
                    }} : {marginLeft: x+'!important', marginRight: x+'!important',}
                )                
            };
            //pading
            ret[`p${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        padding: x+'!important',
                    }} : {padding: x+'!important',}
                )               
            };
            ret[`py${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        paddingTop: x+'!important',
                        paddingBottom: x+'!important',
                    }} : {paddingTop: x+'!important', paddingBottom: x+'!important',}
                )               
            };
            ret[`px${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        paddingLeft: x+'!important',
                        paddingRight: x+'!important',
                    }} : {paddingLeft: x+'!important', paddingRight: x+'!important',}
                )               
            };
            ret[`pt${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        paddingTop: x+'!important',
                    }} : {paddingTop: x+'!important',}
                )                
            };
            ret[`pr${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        paddingRight: x+'!important',
                    }} : {paddingRight: x+'!important',}
                )               
            };
            ret[`pb${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        paddingBottom: x+'!important',
                    }} : {paddingBottom: x+'!important',}
                )                
            };
            ret[`pl${capitalize(key)}${index}`] = {
                ...(
                    key !== "" ?
                   {[theme.breakpoints.up(key)]: {
                        paddingLeft: x+'!important',
                    }} : {paddingLeft: x+'!important',}
                )               
            };            
        }); 
        
        
    })
    return ret;
}

const displayProps = [
    {
        name: 'Block',
        value: 'block',
    },
    {
        name: 'Flex',
        value: 'flex',
        fallbacks: [
            '-webkit-box',
            '-moz-box',
            '-webkit-flex',
            '-ms-flexbox'
        ]
    },
    {
        name: 'InlineBlock',
        value: 'inline-block',
    },
    {
        name: 'None',
        value: 'none',
    },   
]

const justifyContentProps = [
    {
        name: 'Center',
        value: 'center',
    },
    {
        name: 'Start',
        value: 'flex-start',
    },
    {
        name: 'End',
        value: 'flex-end',
    },
    {
        name: 'Between',
        value: 'space-between',
    },   
]

const flexDirectionProps = [
    {
        name: 'Col',
        value: 'column'
    },
    {
        name: 'Row',
        value: 'row'
    }
]

const alignItemsProps = [
    {
        name: 'Start',
        value: 'flex-start'
    },
    {
        name: 'End',
        value: 'flex-end'
    },
    {
        name: 'Center',
        value: 'center'
    }
]

const textAlignProps = [
    {
        name: 'Center',
        value: 'center',
    },
    {
        name: 'Left',
        value: 'left',
    },
    {
        name: 'Right',
        value: 'right',
    },      
]

const generateUtils = (theme) => {  
    let ret = {};   

    let keys = [...theme.breakpoints.keys];
    keys.unshift("")

    keys.forEach(key => {
        displayProps.forEach(x => {              
            let cssProps = {
                display: x.value,                
            }
            if(x.fallbacks) {
                cssProps.fallbacks = x.fallbacks.map(fallback=> {
                    return {display: fallback}
                })
            }            
            ret[`d${capitalize(key)}${x.name}`] = {
                ...(                
                    key !== "" ?
                        {[theme.breakpoints.up(key)]: {                            
                            ...cssProps                            

                        }} : {                           
                            ...cssProps
                        }
                )
            }
        });
        
        justifyContentProps.forEach(x => {       
            ret[`justifyContent${capitalize(key)}${x.name}`] = {
                ...(
                    key !== "" ?
                    {[theme.breakpoints.up(key)]: {
                            '-webkit-justify-content': x.value,
                            '-moz-justify-content': x.value,
                            justifyContent: x.value,
                        }} : {                            
                            '-webkit-justify-content': x.value,
                            '-moz-justify-content': x.value,
                            justifyContent: x.value,
                        }
                )
            }
        });

        flexDirectionProps.forEach(x => {       
            ret[`flex${capitalize(key)}${x.name}`] = {
                ...(
                    key !== "" ?
                    {[theme.breakpoints.up(key)]: {
                            flexDirection: x.value,
                        }} : {flexDirection: x.value}
                )
            }
        }); 

        alignItemsProps.forEach(x => {       
            ret[`alignItems${capitalize(key)}${x.name}`] = {
                ...(
                    key !== "" ?
                    {[theme.breakpoints.up(key)]: {
                            alignItems: x.value,
                        }} : {alignItems: x.value}
                )
            }
        }); 
        
        textAlignProps.forEach(x => {       
            ret[`text${capitalize(key)}${x.name}`] = {
                ...(
                    key !== "" ?
                    {[theme.breakpoints.up(key)]: {
                            textAlign: x.value,
                        }} : {textAlign: x.value}
                )
            }
        }); 
    })
    return ret;
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


export default getSharedStyles