"use client"

function vibrate() {
if ('vibrate' in navigator) {
	// vibration API supported
    navigator.vibrate(200);
}
}

export default function Footer() {
    return <footer className="flex flex-col items-center justify-center w-full gap-2 p-4">
        <span 
        onClick={() => vibrate()}
        className="p-1 px-2 text-[8px] font-bold tracking-widest border rounded-full bg-secondary text-primary border-primary">BETA 0.1a</span>
        <div className="flex gap-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M10 2a4 4 0 0 1 3.46 1.99l.098.182l.638-.368a4 4 0 0 1 5.475 5.446l-.113.186l.638.368a4 4 0 0 1-1.979 7.464L18 17.264V18a4 4 0 0 1-7.459 2.01l-.1-.182l-.637.368a4 4 0 0 1-5.475-5.446l.113-.186l-.638-.368a4 4 0 0 1 1.979-7.464L6 6.736V6a4 4 0 0 1 4-4Zm4.702 10.787l-.068 4.06a1 1 0 0 1-.391.777l-.109.072l-1.956 1.13a2.002 2.002 0 0 0 3.817-.677L16 18v-4.434l-1.298-.779Zm-2.033 1.947l-3.55 1.97l-.118.056a1 1 0 0 1-.75-.006l-.117-.058l-1.956-1.13l-.09.136a2 2 0 0 0 2.578 2.835l.138-.073l3.84-2.217l.025-1.513Zm2.688-5.415l-1.324.735l3.482 2.088l.107.075a1 1 0 0 1 .37.653L18 13v2.26l.162.008a2 2 0 0 0 1.167-3.649l-.133-.083l-3.84-2.217ZM6 8.741a2.001 2.001 0 0 0-1.328 3.64l.132.083l3.84 2.217l1.323-.735l-3.481-2.088a1 1 0 0 1-.477-.728L6 11V8.74Zm6.014 2.434l-.722.4l-.014.826l.708.425l.722-.401l.014-.826l-.708-.425ZM10 4a2 2 0 0 0-1.995 1.85L8 6v4.434l1.298.779l.068-4.06l.01-.13a1 1 0 0 1 .381-.647l.109-.072l1.957-1.13l-.068-.135A2 2 0 0 0 10 4Zm7.928 2.268a2 2 0 0 0-2.594-.805l-.138.073l-3.84 2.217l-.025 1.513l3.55-1.97a1 1 0 0 1 .868-.05l.117.058l1.957 1.13c.442-.62.51-1.465.105-2.166Z" /></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsNextjsFill0)"><path fill="currentColor" d="M11.214.006c-.052.005-.216.022-.364.033c-3.408.308-6.6 2.147-8.624 4.974a11.88 11.88 0 0 0-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696c.779.251 1.6.422 2.533.526c.364.04 1.936.04 2.3 0c1.611-.179 2.977-.578 4.323-1.265c.207-.105.247-.134.219-.157a211.64 211.64 0 0 1-1.955-2.62l-1.919-2.593l-2.404-3.559a342.499 342.499 0 0 0-2.422-3.556c-.009-.003-.018 1.578-.023 3.51c-.007 3.38-.01 3.516-.052 3.596a.426.426 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 0 1-.157-.172l-.05-.105l.005-4.704l.007-4.706l.073-.092a.644.644 0 0 1 .174-.143c.096-.047.133-.051.54-.051c.478 0 .558.018.682.154c.035.038 1.337 2 2.895 4.362l4.734 7.172l1.9 2.878l.097-.063a12.318 12.318 0 0 0 2.465-2.163a11.947 11.947 0 0 0 2.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 0 0-2.498-.523c-.226-.024-1.776-.05-1.97-.03Zm4.913 7.26a.473.473 0 0 1 .237.276c.018.06.023 1.365.018 4.305l-.007 4.218l-.743-1.14l-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.478.478 0 0 1 .232-.296c.097-.05.132-.054.5-.054c.347 0 .408.005.486.047Z" /></g><defs><clipPath id="akarIconsNextjsFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>
        </div>
    </footer>
}