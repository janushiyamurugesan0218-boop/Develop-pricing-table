document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billing-toggle');
    
    // Target display data value boxes
    const starterPrice = document.getElementById('starter-price');
    const proPrice = document.getElementById('pro-price');
    const enterprisePrice = document.getElementById('enterprise-price');

    // Target display period descriptions
    const starterPeriod = document.getElementById('starter-period');
    const proPeriod = document.getElementById('pro-period');
    const enterprisePeriod = document.getElementById('enterprise-period');

    // Matrix map containing value rules for Monthly vs Yearly options
    const prices = {
        monthly: { starter: "19", pro: "49", enterprise: "99", text: "/ mo" },
        yearly: { starter: "15", pro: "39", enterprise: "79", text: "/ mo" } 
        // Note: The yearly amounts reflect the discounted monthly equivalent cost
    };

    // Toggle interaction listener function
    billingToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            // Checkbox true -> User selected Yearly billing plan track
            starterPrice.textContent = prices.yearly.starter;
            proPrice.textContent = prices.yearly.pro;
            enterprisePrice.textContent = prices.yearly.enterprise;

            // Update period descriptions to reflect accurate cadence tracking labels
            starterPeriod.textContent = prices.yearly.text;
            proPeriod.textContent = prices.yearly.text;
            enterprisePeriod.textContent = prices.yearly.text;
        } else {
            // Checkbox false -> User remains on standard Monthly billing track
            starterPrice.textContent = prices.monthly.starter;
            proPrice.textContent = prices.monthly.pro;
            enterprisePrice.textContent = prices.monthly.enterprise;

            starterPeriod.textContent = prices.monthly.text;
            proPeriod.textContent = prices.monthly.text;
            enterprisePeriod.textContent = prices.monthly.text;
        }
    });
});