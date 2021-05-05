import headsOrTails from "./functions.js";

const winningOption = document.getElementById('winning-option');
const defaultText = 'Choice Winner is:';

/**
 * @param {object{string}}  option A option B
 * @returns {string} option A OR option B
 */
const showWinningOption = ({ a, b }) => winningOption.textContent = headsOrTails() ? `${defaultText} ${a}` : `${defaultText} ${b}`;

/**
 * @returns {string}
 */
const showError = () => {
    winningOption.textContent = 'Complete the two options'
    setTimeout(() => winningOption.textContent = `${defaultText} ...`, 1500);
}

/**
 * @returns {string}
 */
const resetText = () => winningOption.textContent = `${defaultText} ...`;

export { showWinningOption, showError, resetText }