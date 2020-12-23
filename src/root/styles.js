import { css } from 'lit-element';

export const styles =
    css`
        *, *:before, *:after {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        main {
            width: 100%;
            display: flex;
            flex-grow: 1;
            flex-shrink: 1;
            background-color: var(--white);
            justify-content: center;            
        }

        header {
            position:sticky;
            top:0;
        }

        header, footer {
            width: 100%;
            background-color: var(--off-white);
            padding: 1.5em;
        }

        /* utils (a functional lib like tachyons should be used instead) */

        /* Grid system */
        .container {max-width: 80em;}
        .center {margin: 0 auto;}
        .w-full {width: 100%}
        
        @media only screen and (min-width: 30em) {
            .w\\:ns-auto {width: auto;}
        }
        /* Display */
        .d-flex {display: flex}
        .d-inline-block {display: inline-block;}

        /* Font sizes */
        .fs-small {font-size: .8em}
        .fs-large {font-size: 1em}
        .fw-light {font-weight: 300}

        /* Text */
        .no-underline {text-decoration: none;}
        .hover\\:underline:hover {text-decoration: underline;}
        .lh-solid {line-height: 1;}
        .tracked {letter-spacing: .1em;}
        .text-right{text-align: right;}
        .no-wrap{white-space:nowrap;}
        
        /* Text colors */
        .grey {color: var(--dark-grey)}
        .light-grey {color: var(--light-grey)}
        .hover\\:orange:hover {color: var(--lion-orange)}

        /* Spacing */
        .m-0 {margin: 0}
        .p-0 {padding:0}
        .pr-1 {padding-right: .25em}
        .pl-1 {padding-left: .25em}
        .pl-2 {padding-left: .5em}
        .mr-1 {margin-right: .25em}
        .mr-2 {margin-right: .5em}
        .mr-4 {margin-right: 1.5em}
        .ml-4 {margin-left: 1.5em}
        .ml-3 {margin-left: 1em}
        .mb-2 {margin-bottom: .5em}
        .mb-3 {margin-bottom: 1em}
        .pv2 {
            padding-top: .5em;
            padding-bottom: .5em;
        }
        .ph2 {
            padding-left: .5em;
            padding-right: .5em;
        }         
        .ph3 {
            padding-left: 1em;
            padding-right: 1em;
        }        
        .mb-4 {margin-bottom: 1.5em}

        /* Flex */
        .align-items-center {align-items: center;}
        .justify-items-between {justify-content: space-between;}
        .flex-wrap {flex-wrap: wrap;}
        .flex-grow {flex-grow: 1;}
        .flex-no-grow{flex-grow: 0;}
        .flex-no-shrink{flex-shrink: 0;}
        .flex-1 {flex-grow: 1}
        .flex-2 {flex-grow: 2}
        .flex-3 {flex-grow: 3}

        /* not small screen */
        @media only screen and (min-width: 30em) {
            .ns\\:flex-wrap {flex-wrap: wrap;}
        }

        /* Forms */
        input:not([type=checkbox]) {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-color: transparent;
        }

        input::-moz-focus-inner {
            border: 0;
            padding: 0;
        }

        /* Borders */
        .ba {
            border-style: solid;
            border-width: 1px;
        }

        .b-none {border: none;}

        .b-light-grey {
            border-color: var(--light-grey)
        }

        .b-ultra-light-grey {
            border-color: var(--ultra-light-grey)
        }        

        .br2 {
            border-radius: .36em;
        }        

        .bw1 {
            border-width: .125em;
        }

        .bw2 {
            border-width: .25em;
        }

        /* Colors */
        .white {color: var(--white)}

        /* Backgrounds */
        .bg-orange {background-color: var(--lion-orange);}
        .bg-none {background-color: transparent;}

        /* Links */
        .link {
            cursor: pointer;
            text-decoration: none;
            transition: color .15s ease-in;
        }

        .link:link, .link:visited {
            transition: color .15s ease-in;
        }

        .link:hover {
            transition: color .15s ease-in;
        }

        .link:active {
            transition: color .15s ease-in;
        }

        .link:focus {
            transition: color .15s ease-in;
            outline: 1px dotted currentColor;
        }  
        
        /* Effects */
        .dim {
            opacity: 1;
            transition: opacity .2s ease-in;
        }

        .dim:hover, .dim:focus {
            opacity: .5;
            transition: opacity .2s ease-in;
        }

        .dim:active {
            opacity: .8;
            transition: opacity .2s ease-out;
        }        
    `