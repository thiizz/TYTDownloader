import styled from 'styled-components'

const SubmitButtonContainer = styled.div`
    .download-button {
        position: relative;
        border-width: 0;
        color: white;
        font-size: 2rem;
        font-weight: 600;
        border-radius: 4px;
        z-index: 1;
        cursor: pointer;
    }

    .download-button .docs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        min-height: 57px;
        padding: 0 15px;
        border-radius: 3px;
        z-index: 1;
        background-color: #242a35;
        border: solid 1px #e8e8e82d;
        transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .download-button:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .download {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 90%;
        margin: 0 auto;
        z-index: -1;
        border-radius: 4px;
        transform: translateY(0%);
        color: #000;
        background-color: #01e056;
        border: solid 1px #01e0572d;
        transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .download-button:hover .download {
        transform: translateY(100%)
    }

    .download svg polyline,.download svg line {
        animation: docs 1s infinite;
    }

    @keyframes docs {
    0% {
        transform: translateY(0%);
    }

    50% {
        transform: translateY(-15%);
    }

    100% {
        transform: translateY(0%);
    }
    }
`

export { SubmitButtonContainer }