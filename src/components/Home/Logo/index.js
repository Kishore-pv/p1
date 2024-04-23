import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap.timeline()
    //     .to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1
    //     })
    // },[])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="S" />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="559.000000pt" height="897.000000pt" viewBox="0 0 559.000000 897.000000"
            >
            
            <g className='svg-container' transform="translate(0.000000,457) scale(0.100000,-0.100000)"
            fill="none" stroke="none">
            <path ref={outlineLogoRef} d="M2930 8959 c-344 -16 -623 -85 -915 -228 -231 -114 -406 -241 -600
            -436 -61 -60 -145 -137 -188 -169 -432 -325 -715 -757 -806 -1230 -109 -564
            21 -1117 384 -1641 250 -360 780 -877 1547 -1511 451 -373 600 -505 803 -708
            215 -216 275 -293 350 -448 55 -114 75 -188 82 -298 6 -96 -6 -173 -39 -257
            -21 -53 -27 -59 -73 -76 -136 -51 -374 -73 -521 -46 -401 71 -763 376 -1088
            916 -21 35 -43 63 -50 63 -7 0 -32 -13 -57 -29 -74 -48 -229 -141 -233 -141
            -3 0 -54 -31 -113 -68 -59 -37 -135 -84 -168 -102 -33 -19 -67 -39 -77 -45 -9
            -5 -56 -34 -105 -63 -48 -29 -153 -94 -233 -143 -80 -49 -152 -92 -160 -96
            -26 -12 -144 -86 -180 -114 -19 -15 -137 -88 -262 -164 -130 -78 -228 -143
            -228 -151 0 -8 30 -70 66 -137 207 -379 396 -640 644 -887 219 -218 401 -350
            665 -480 247 -122 484 -196 775 -241 172 -27 628 -38 819 -19 636 61 1161 302
            1561 716 47 48 128 120 181 160 402 304 684 722 804 1189 61 240 70 318 70
            640 0 259 -3 304 -23 418 -84 467 -268 823 -647 1257 -192 218 -401 409 -1095
            995 -637 539 -1034 894 -1208 1081 -152 163 -223 311 -223 465 0 43 2 83 5 88
            20 32 266 41 394 15 322 -65 649 -312 972 -731 39 -51 70 -83 82 -83 10 0 283
            234 615 528 328 290 684 605 792 700 108 95 197 181 199 191 2 10 -38 62 -100
            131 -399 446 -754 740 -1106 918 -314 159 -659 255 -962 268 -63 2 -135 6
            -160 7 -25 2 -110 0 -190 -4z m570 -58 c671 -123 1188 -450 1813 -1144 53 -60
            97 -112 96 -115 0 -9 -409 -367 -418 -367 -3 0 -49 47 -101 105 -610 676
            -1113 1004 -1737 1135 -313 65 -761 62 -1082 -6 -152 -32 -362 -107 -510 -180
            l-136 -67 65 60 c361 334 772 528 1256 592 167 23 601 15 754 -13z m-450 -400
            c639 -117 1145 -424 1723 -1047 82 -87 157 -171 168 -186 l19 -26 -333 -295
            -332 -295 -18 24 c-110 143 -202 250 -307 355 -191 192 -351 304 -540 380
            -131 52 -224 69 -377 69 -191 0 -324 -38 -456 -129 -74 -51 -172 -164 -203
            -236 -16 -36 -34 -65 -42 -65 -23 0 -114 -42 -179 -82 -84 -53 -188 -166 -225
            -244 -74 -158 -49 -356 65 -532 112 -170 494 -524 1337 -1237 693 -585 897
            -771 1085 -985 379 -434 563 -790 647 -1257 20 -113 23 -161 23 -398 0 -300
            -10 -384 -70 -620 -57 -223 -150 -434 -275 -625 -109 -166 -161 -223 -252
            -278 -328 -197 -690 -312 -1109 -352 -188 -18 -606 -8 -779 19 -290 45 -528
            119 -775 241 -385 190 -680 444 -972 836 -118 159 -345 527 -332 538 22 17
            759 456 766 456 5 0 29 -34 52 -76 232 -407 527 -721 817 -869 163 -83 300
            -115 500 -115 252 0 451 62 623 194 74 57 192 182 221 235 19 32 40 50 98 81
            197 107 356 281 424 466 18 49 21 82 22 199 1 165 -11 222 -79 363 -75 156
            -135 232 -355 453 -208 208 -355 338 -808 713 -766 633 -1288 1142 -1537 1501
            -305 440 -449 908 -415 1355 29 396 150 717 387 1032 64 85 84 103 158 148
            259 157 565 262 881 304 167 23 601 15 754 -13z m-1907 -538 c-321 -485 -398
            -1123 -203 -1693 70 -208 178 -417 315 -615 250 -360 780 -877 1547 -1511 451
            -373 600 -505 803 -708 215 -216 275 -292 350 -448 65 -136 80 -200 79 -343
            -1 -134 -15 -186 -80 -302 -60 -108 -201 -244 -326 -317 -53 -31 -55 -28 -31
            35 12 33 17 79 17 184 1 165 -12 222 -79 363 -75 156 -135 232 -355 453 -208
            208 -355 338 -808 713 -766 633 -1288 1142 -1537 1501 -305 440 -449 908 -415
            1355 34 454 190 817 504 1174 58 66 264 256 277 256 4 0 -23 -44 -58 -97z
            m2095 -529 c212 -43 445 -176 659 -378 129 -121 368 -406 360 -429 -2 -6 -95
            -93 -208 -193 l-204 -182 -18 24 c-105 137 -202 250 -307 355 -191 192 -351
            304 -540 380 -145 58 -234 72 -415 67 l-153 -4 24 47 c28 57 121 159 181 200
            71 49 158 88 240 108 99 25 274 27 381 5z m-881 -507 c2 -172 69 -314 230
            -486 182 -195 573 -545 1213 -1086 693 -585 897 -771 1085 -985 379 -434 563
            -790 647 -1257 20 -113 23 -161 23 -398 0 -300 -10 -384 -70 -620 -112 -436
            -362 -824 -724 -1124 l-53 -45 72 110 c134 203 226 409 285 639 61 240 70 318
            70 640 0 259 -3 304 -23 418 -84 467 -268 823 -647 1257 -192 218 -401 409
            -1095 995 -860 727 -1228 1069 -1335 1240 -86 138 -120 313 -82 421 54 149
            181 277 351 351 28 12 51 22 52 23 0 0 1 -42 1 -93z m-438 -4247 c300 -462
            644 -733 1015 -799 100 -18 319 -13 421 9 50 10 101 22 114 26 21 6 22 5 12
            -15 -19 -35 -141 -160 -202 -206 -116 -90 -253 -150 -412 -180 -92 -17 -277
            -20 -363 -4 -410 73 -777 388 -1108 952 -32 54 -56 100 -54 101 9 8 200 126
            203 126 5 0 204 121 235 143 30 21 15 38 139 -153z m-1353 -732 c233 -416 511
            -757 812 -997 275 -219 616 -385 967 -472 225 -55 364 -71 669 -76 307 -6 445
            3 666 43 255 46 474 119 698 233 l117 60 -75 -71 c-377 -356 -881 -572 -1471
            -628 -188 -18 -606 -8 -779 19 -465 72 -868 244 -1222 521 -180 141 -402 382
            -575 625 -130 183 -342 550 -326 566 11 11 446 277 454 278 4 1 33 -45 65
            -101z"/>
            </g>
            </svg>
        </div>
    )
}

export default Logo