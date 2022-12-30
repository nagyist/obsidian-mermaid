import { TRIDENT_ICON_NAME } from "main"
import { addIcon, sanitizeHTMLToDom } from "obsidian"

export function addTridentIcon(): void {
	addIcon(TRIDENT_ICON_NAME, getSanitizedSvg())
};

function getSanitizedSvg(): string {
	// a hack to get DocumentFragment as a string
	var sanitized = sanitizeHTMLToDom(tridentIcon);
	var tempContainer = createDiv();
	tempContainer.appendChild(sanitized);
	return tempContainer.innerHTML;
}

var tridentIcon = `<svg width="100" height="100" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.3876 30.1639C62.8776 29.6541 62.1414 29.4434 61.439 29.6051L46.6574 32.5601C45.9179 
32.7318 45.3279 33.2907 45.1192 34.0208C44.9089 34.7506 45.113 35.5373 45.6499 36.0742L47.1282 
37.552L36.7814 47.895C35.965 48.7111 34.6415 48.7111 33.8252 47.895L29.3908 43.4622L50.0846 22.7759L51.5629 
24.2537C52.0998 24.7904 52.8871 24.9944 53.6169 24.7842C54.3473 24.5753 54.9064 23.9858 55.0782 
23.2466L58.0341 8.4704C58.1958 7.76815 57.9851 7.03228 57.4751 6.52252C56.965 6.01265 56.229 5.80202 
55.5265 5.96365L40.7453 8.91853C40.0057 9.09028 39.4158 9.64916 39.2071 10.3793C38.9967 11.109 39.2008 
11.8958 39.7378 12.4327L41.2161 13.9104L20.5223 34.5966L16.0879 30.1638C15.2716 29.3477 15.2716 28.0247 
16.0879 27.2087L26.4347 16.8657L27.913 18.3434C28.45 18.8802 29.2373 19.0842 29.967 18.8739C30.6974 18.6653 
31.2565 18.0755 31.4283 17.3363L34.3843 2.56014C34.546 1.85789 34.3353 1.12202 33.8252 0.612265C33.3151 0.102514 
32.579 -0.108237 31.8765 0.0533888L17.0953 3.00839C16.3557 3.18014 15.7658 3.73902 15.5571 4.46915C15.3467 5.1989 
15.5508 5.98565 16.0878 6.5224L17.5661 8.00015L7.21925 18.3432C1.50488 24.0554 1.50488 33.3169 7.21925 39.0295L11.6536 
43.4622L0.610679 54.524C-0.204122 55.3402 -0.203497 56.6621 0.612179 57.4776L6.52461 63.388C7.34154 64.2046 8.66628 
64.2039 9.48233 63.3865L20.522 52.3277L24.9564 56.7605C30.6708 62.4727 39.9358 62.4727 45.6501 56.7605L55.9969 46.4175L57.4752 
47.8952C58.0121 48.432 58.7994 48.636 59.5292 48.4257C60.2596 48.2171 60.8187 47.6273 60.9905 46.8881L63.9464 32.1119C64.1084 
31.4097 63.8977 30.6738 63.3876 30.1639ZM57.6701 42.1787L55.9975 40.5068L42.6944 53.8051C38.6127 57.8855 31.9948 57.8852 27.9131 
53.8051L20.5223 46.4173L17.5661 49.3725L8.00441 58.9569L5.04819 56.0017L14.6098 46.4173L17.5661 43.4622L10.1755 36.0743C6.09383 
31.9942 6.09383 25.3787 10.1755 21.2986L23.4786 8.00028L21.8053 6.3274L29.6834 4.75302L28.1077 12.6273L26.4352 10.9554L13.1321 
24.2537C10.6829 26.7019 10.6829 30.6711 13.1321 33.1192L20.5227 40.5071L47.1287 13.9108L45.4554 12.2378L53.3335 10.6635L51.7578 
18.5378L50.0853 16.8659L23.4786 43.462L30.8692 50.8499C33.3184 53.2979 37.289 53.2979 39.738 50.8499L53.0412 37.5516L51.3678 
35.8786L59.246 34.3042L57.6701 42.1787Z" fill="currentColor"/>
</svg>`;

