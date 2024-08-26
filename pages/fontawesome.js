// pages/fontawesome.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown);

// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;
