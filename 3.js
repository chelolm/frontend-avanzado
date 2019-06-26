class StrategyManager {
    constructor() {
        this._strategy = null;
    }
    set strategy(strategy) {
        this._strategy = strategy;
    }
    get strategy() {
        return this._strategy;
    }
    doAction() {
        this._strategy.doAction();
    }
}

class GoogleLogin {
    doAction() {
      console.log('Connect to Google to login');
    }
}

class FacebookLogin {
    doAction() {
      console.log('Connect to Facebook to login');
    }
}

class LinkedinLogin {
    doAction() {
      console.log('Connect to Linkedin to login');
    }
}

const strategyManager = new StrategyManager();

let loginStrategy = [];
loginStrategy[0] = new GoogleLogin();
loginStrategy[1] = new FacebookLogin();
loginStrategy[2] = new LinkedinLogin();

strategyManager.strategy = loginStrategy[parseInt(prompt('Choose login: 0 - Google, 1 - Facebook, 2 - Linkedin', '0'))];
strategyManager.doAction();
