// import { useEffect, useState } from 'react';
import './BtnRotation.css';

function BtnRotation() {

    // const [text, setText] = useState('lǝǝɹʍoɥs lǝǝɹʍoɥs lǝǝɹʍoɥs')

    // useEffect(() => {                   
    //    setText(text.split("").reverse().join("")) 
    // }, []);

    return (
        <div className="btn-rotation">
            <div className="btn-rotation__body">
                <div className="btn-rotation__center"></div>

                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400">
                    <defs>
                        <path d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0" id="txt-path"></path>
                    </defs>

                    <text fill="#FFFFFF" fontSize="25.5" fontFamily="Helvetica Neue" fontWeight="600">
                        <textPath className="btn-rotation__text" startOffset="0" xlinkHref="#txt-path">{text}</textPath>
                    </text>
                </svg> */}

                <svg className="btn-rotation__svg" width="116" height="114" viewBox="0 0 116 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.0855 111.588C51.4152 111.408 50.8286 111.139 50.6931 110.605L48.2406 110.739C48.6001 112.105 49.9593 112.819 52.93 113.14C56.0082 113.472 57.7541 112.84 57.906 111.432C58.04 110.191 57.0277 109.394 54.4371 109.018L51.9777 108.656C51.0868 108.524 50.8491 108.377 50.8813 108.079C50.92 107.721 51.6287 107.641 53.6211 107.856C55.0766 108.013 55.7906 108.331 55.9197 108.925L58.4557 108.8C58.0588 107.333 56.7618 106.602 53.7672 106.278C50.2835 105.902 48.5256 106.533 48.3569 108.096C48.2281 109.289 49.1685 109.97 51.6491 110.359L54.0978 110.707L54.448 110.764C55.247 110.905 55.4864 111.038 55.458 111.301C55.4181 111.671 54.7439 111.767 53.0855 111.588ZM47.1815 105.473L44.7927 104.633L43.9613 107C43.4879 108.347 42.1752 108.789 40.4431 108.18C39.2203 107.75 38.7886 106.988 39.1466 105.969L40.1848 103.014L37.796 102.175L36.5907 105.605C35.9184 107.519 36.7452 108.967 39.0208 109.766C40.4926 110.283 41.9516 110.185 43.0543 109.581L41.8093 113.124L44.1981 113.964L47.1815 105.473ZM31.9802 98.4709C29.0454 96.5565 26.762 96.5427 25.5491 98.4021C24.3493 100.241 25.2892 102.359 28.2039 104.26C31.1085 106.155 33.4452 106.175 34.645 104.335C35.8448 102.496 34.8849 100.366 31.9802 98.4709ZM30.9706 100.019C32.6289 101.1 33.0838 101.985 32.4741 102.919C31.8643 103.854 30.8719 103.794 29.2135 102.712C27.5551 101.63 27.1104 100.753 27.7201 99.8182C28.3298 98.8835 29.3122 98.9369 30.9706 100.019ZM24.6914 92.7947L23.2303 91.1232L18.5122 92.235L20.253 87.717L18.7999 86.0546L11.6589 87.9135L13.3805 89.8832L17.6155 88.6199L16.0103 92.8918L17.5345 94.6356L21.949 93.4864L20.1565 97.6352L21.965 99.7042L24.6914 92.7947ZM16.1564 82.6418L14.9876 80.3957L12.9544 81.4537C11.7196 82.0963 10.4805 81.4829 9.59424 79.7798C9.38374 79.3752 9.22136 78.9592 9.14588 78.6062L7.02069 79.6174C7.06033 79.7456 7.14983 79.9696 7.22184 80.1079C7.9752 81.5557 9.23006 82.4854 10.5865 82.7264L9.23253 83.6339L10.3016 85.6884L16.1564 82.6418ZM11.3769 70.5529C10.4986 67.4966 9.49789 66.2734 8.02733 66.1091L8.30323 68.6768C8.81268 68.7552 9.25055 69.4534 9.70461 71.0334C10.1752 72.6712 10.0811 73.6471 9.4077 74.1278L7.18381 66.389C6.95142 66.4058 6.76358 66.4473 6.47524 66.5302C4.48 67.1036 3.85219 69.394 4.75699 72.5426C5.6883 75.7835 7.52197 77.3416 9.56336 76.755C11.6624 76.1518 12.3281 73.8629 11.3769 70.5529ZM6.35679 72.0704C5.92262 70.5595 5.97405 69.6957 6.60625 69.2019L8.11756 74.4611C7.34271 74.3716 6.80753 73.6389 6.35679 72.0704ZM9.53966 59.1411C9.395 55.9644 8.7056 54.5423 7.31336 54.0411L6.98554 56.6026C7.46288 56.7971 7.72668 57.5779 7.80146 59.2202C7.87898 60.9225 7.56084 61.8499 6.7942 62.1611L6.42791 54.1174C6.19797 54.0799 6.00562 54.0766 5.70593 54.0903C3.63208 54.1847 2.48961 56.2668 2.63864 59.5394C2.79203 62.9079 4.21381 64.8493 6.33561 64.7526C8.51735 64.6533 9.69633 62.5815 9.53966 59.1411ZM4.30436 59.4516C4.23285 57.8812 4.48344 57.0529 5.21302 56.7194L5.46194 62.1857C4.72904 61.9188 4.3786 61.0819 4.30436 59.4516ZM9.54137 49.883L0.602058 48.8396L0.308517 51.3546L9.24783 52.398L9.54137 49.883ZM8.89385 34.5372L9.08421 34.1277C9.66731 32.9193 10.0725 32.5341 10.5695 32.5672L11.2027 30.1941C9.79218 30.1122 8.69201 31.1831 7.46623 33.9081C6.19616 36.7316 6.25607 38.5876 7.54743 39.1685C8.68558 39.6804 9.75735 38.9651 10.9181 36.6188L12.0246 34.3928C12.4267 33.5868 12.6395 33.4062 12.9131 33.5293C13.2414 33.6769 13.0981 34.3757 12.276 36.2033C11.6755 37.5384 11.1514 38.1185 10.5473 38.0573L9.87959 40.507C11.3974 40.5845 12.4948 39.5781 13.7305 36.8312C15.1679 33.6356 15.1129 31.7687 13.6793 31.1239C12.5849 30.6316 11.6461 31.3146 10.5078 33.5526L9.4171 35.7726L9.25428 36.0877C8.87275 36.8038 8.6727 36.9904 8.4313 36.8818C8.09204 36.7292 8.20958 36.0583 8.89385 34.5372ZM16.5262 30.8296L18.0623 28.8167L16.0685 27.2952C14.9333 26.4289 14.9185 25.0439 16.0323 23.5844C16.8185 22.5541 17.6768 22.3789 18.5354 23.0341L21.0252 24.9341L22.5613 22.9213L19.6708 20.7155C18.0586 19.4852 16.4261 19.8244 14.9629 21.7418C14.0165 22.9819 13.659 24.3998 13.8935 25.6354L10.9076 23.3568L9.37156 25.3696L16.5262 30.8296ZM27.8658 18.5241C30.5874 16.3171 31.3001 14.1477 29.9018 12.4234C28.5187 10.7178 26.2151 10.9636 23.5122 13.1555C20.8186 15.3399 20.0836 17.5581 21.4668 19.2637C22.85 20.9694 25.1722 20.7085 27.8658 18.5241ZM26.7018 17.0887C25.1639 18.3359 24.183 18.4979 23.48 17.6311C22.7771 16.7643 23.1383 15.838 24.6762 14.5909C26.2141 13.3437 27.1857 13.1892 27.8886 14.056C28.5915 14.9228 28.2397 15.8416 26.7018 17.0887ZM35.5225 13.3223L37.5628 12.4474L37.9588 7.61625L41.7206 10.6643L43.7499 9.79408L44.1815 2.42769L41.7773 3.45874L41.6743 7.87696L38.1047 5.03368L35.9762 5.94649L35.7094 10.5003L32.3147 7.51671L29.7891 8.59978L35.5225 13.3223ZM47.7945 8.33988L50.2923 7.92501L49.9167 5.66399C49.6886 4.2908 50.6559 3.30297 52.5499 2.98838C52.9997 2.91367 53.4456 2.88827 53.8046 2.92595L53.5021 0.591976C53.368 0.589929 53.1273 0.605577 52.9734 0.631137C51.3635 0.89854 50.0905 1.80334 49.4408 3.01822L48.9978 1.4496L46.7131 1.82908L47.7945 8.33988ZM60.7838 7.52239C63.9621 7.62557 65.4336 7.04901 66.0417 5.70003L63.5135 5.17372C63.2824 5.63446 62.4834 5.83665 60.8403 5.78331C59.1372 5.72802 58.2373 5.33862 57.9868 4.55007L66.0345 4.81133C66.0899 4.58501 66.1081 4.3935 66.1179 4.09365C66.1852 2.01875 64.1984 0.717597 60.9241 0.611303C57.5539 0.501894 55.5077 1.76817 55.4388 3.89105C55.368 6.0739 57.3416 7.41065 60.7838 7.52239ZM60.882 2.27881C62.4532 2.32982 63.2594 2.64414 63.5351 3.39749L58.066 3.21994C58.3892 2.51005 59.2509 2.22586 60.882 2.27881ZM72.2024 9.28053C75.2701 10.1184 76.8352 9.89896 77.7397 8.72789L75.4025 7.62931C75.0709 8.02387 74.2468 8.03515 72.6609 7.602C71.0171 7.15305 70.2321 6.56549 70.1714 5.74033L77.9389 7.86178C78.0453 7.65448 78.1074 7.47243 78.1865 7.18303C78.7334 5.18037 77.1027 3.45373 73.9425 2.59061C70.6896 1.70219 68.4055 2.45914 67.8459 4.5081C67.2705 6.61493 68.8801 8.37314 72.2024 9.28053ZM73.5146 4.20284C75.031 4.61701 75.7423 5.10982 75.8357 5.90658L70.5571 4.46488C71.0361 3.84936 71.9402 3.77286 73.5146 4.20284ZM81.0218 12.1414L84.7858 3.96632L82.4859 2.90738L78.7219 11.0825L81.0218 12.1414ZM95.7922 16.2498L96.1232 16.5569C97.0936 17.4836 97.3355 17.9876 97.151 18.4503L99.2142 19.783C99.7261 18.4661 99.0456 17.0898 96.8299 15.085C94.5342 13.0078 92.7499 12.4938 91.7998 13.5437C90.9625 14.4692 91.3133 15.709 93.1887 17.5354L94.9662 19.2731C95.6095 19.9037 95.7158 20.1617 95.5145 20.3842C95.273 20.6511 94.6522 20.2998 93.1662 18.9553C92.0807 17.973 91.69 17.2959 91.9341 16.74L89.8087 15.3509C89.2679 16.7713 89.8878 18.1251 92.1213 20.146C94.7195 22.4969 96.5128 23.019 97.5675 21.8533C98.3726 20.9635 98.0116 19.8601 96.2324 18.0884L94.4557 16.3676L94.2059 16.1157C93.642 15.5323 93.526 15.2846 93.7036 15.0883C93.9532 14.8125 94.5553 15.1307 95.7922 16.2498ZM96.9783 24.6584L98.4231 26.7376L100.483 25.3065C101.655 24.4916 102.978 24.9021 104.026 26.4099C104.765 27.4741 104.669 28.3448 103.782 28.9611L101.21 30.7484L102.655 32.8276L105.641 30.7528C107.306 29.5955 107.484 27.9377 106.108 25.9569C105.217 24.6759 103.977 23.9009 102.729 23.7452L105.814 21.6019L104.369 19.5226L96.9783 24.6584ZM105.208 39.244C106.468 42.514 108.311 43.8617 110.383 43.064C112.432 42.2749 112.909 40.008 111.659 36.7604C110.413 33.524 108.53 32.1402 106.48 32.9292C104.431 33.7183 103.962 36.0076 105.208 39.244ZM106.933 38.58C106.222 36.7322 106.37 35.7491 107.412 35.3481C108.453 34.9471 109.223 35.5767 109.934 37.4244C110.646 39.2722 110.493 40.2441 109.451 40.6451C108.41 41.0461 107.645 40.4278 106.933 38.58ZM107.784 48.1095L107.985 50.3204L112.456 52.1917L108.394 54.8259L108.594 57.0248L115.465 59.7145L115.228 57.1092L111.059 55.6443L114.867 53.1296L114.658 50.8231L110.41 49.1604L114.297 46.8554L114.049 44.1186L107.784 48.1095ZM108.737 61.3393L108.369 63.8443L110.636 64.178C112.014 64.3807 112.658 65.6036 112.379 67.5032C112.312 67.9543 112.2 68.3866 112.055 68.7169L114.369 69.1424C114.412 69.0153 114.471 68.7814 114.494 68.6271C114.731 67.0124 114.259 65.5238 113.301 64.5338L114.93 64.5916L115.267 62.3002L108.737 61.3393ZM105.527 73.9356C104.447 76.9267 104.541 78.5043 105.636 79.4993L106.918 77.2571C106.551 76.895 106.605 76.0726 107.163 74.5263C107.742 72.9235 108.39 72.1878 109.217 72.193L106.484 79.7668C106.682 79.8894 106.859 79.9659 107.141 80.0677C109.093 80.7725 110.945 79.2845 112.057 76.2031C113.201 73.0313 112.629 70.6941 110.631 69.9731C108.577 69.2317 106.696 70.6961 105.527 73.9356ZM110.484 75.6481C109.95 77.1267 109.402 77.7965 108.6 77.8261L110.458 72.6791C111.033 73.2057 111.038 74.113 110.484 75.6481ZM100.333 84.2501C98.588 86.9083 98.3126 88.4645 99.1466 89.6868L100.914 87.804C100.641 87.3666 100.886 86.5794 101.788 85.2051C102.723 83.7807 103.525 83.216 104.328 83.4134L99.9086 90.1441C100.073 90.3094 100.227 90.4248 100.478 90.5895C102.213 91.7289 104.359 90.7121 106.157 87.9736C108.008 85.155 107.995 82.7487 106.219 81.5829C104.393 80.3842 102.224 81.3712 100.333 84.2501ZM104.756 87.0682C103.894 88.3822 103.205 88.9063 102.418 88.7487L105.422 84.1746C105.859 84.8205 105.652 85.704 104.756 87.0682ZM94.8832 91.7641L96.5987 89.9018L103.218 95.9997L101.503 97.8619L94.8832 91.7641Z" fill="white"/>
                </svg>

            </div>
        </div>
    );
}

export default BtnRotation;
