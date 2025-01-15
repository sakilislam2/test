function startForm() {
    document.querySelector('.start-page').style.display = 'none';
    document.querySelector('.form-page').classList.add('active');
}

function clearForm() {
    document.getElementById('my-form').reset();
}


function toggleLanguage() {
    const btn = document.querySelector('.toggle-lang button');
    const startPage = document.querySelector('.start-page');
    const formPage = document.querySelector('.form-page');

    if (btn.textContent === 'Switch to বাংলা') {
        btn.textContent = 'Switch to English';
        
        // Switch content to Bengali
        startPage.querySelector('h1').textContent = 'বিএসবিডি অফিসিয়াল মাল্টিপ্লেয়ার মেসেঞ্জার গ্রুপে যোগদানের রিকুয়েস্ট ফর্ম ';
        startPage.querySelector('p').textContent = 'অফিসিয়াল গ্রুপে যোগদানের জন্য ফর্মে স্বাগতম। দয়া করে নিয়মগুলি মনোযোগ দিয়ে পড়ুন।';
        startPage.querySelector('.rules-caption').textContent = 'শুরু করার পূর্বে পড়ুন:';
        startPage.querySelector('.btn-start').textContent = 'শুরু করুন';
        startPage.querySelector('.rules ul').innerHTML = `
            <li><i class="fas fa-check"></i>সঠিক তথ্য প্রদান করুন এবং প্রত্যেকটি প্রশ্নের সঠিক উত্তর নিশ্চিত করুন।</li>
            <li><i class="fas fa-bus"></i>প্রতিদিন অন্তত ১টি ট্রিপে এবং সপ্তাহে মোট ৫টি ট্রিপে অবশই জয়েন হবেন।</li>
            <li><i class="fa fa-check"></i> গ্রুপের গাইডলাইন মেনে চলবেন।</li>
            <li><i class="fas fa-check"></i> তথ্যসমূহ বিভিন্ন টুর্নামেন্ট, ফটো ইভেন্ট, কনটেস্ট এর সময় ব্যবহৃত হবে।</li>
            <li><i class="fas fa-volume-up"></i> উপযুক্ত ভাষা ব্যবহার করবেন।</li>
            <li><i class="fas fa-lightbulb"></i> সকল মেম্বারদের প্রতি শ্রদ্ধাশীল এবং বন্ধুত্বপূর্ণ থাকবেন ।</li>
        `;
        
        formPage.querySelector('h2').textContent = 'রেজিস্ট্রেশন ফর্ম';
        formPage.querySelector('label[for="name"]').textContent = ' আপনার নাম:';
        formPage.querySelector('label[for="email"]').textContent = 'ইমেল:';
        formPage.querySelector('label[for="game id"]').textContent = 'গেইম আইডি:';
        formPage.querySelector('label[for="uid"]').textContent = 'UID-ইউআইডি:';
        formPage.querySelector('label[for="fb link"]').textContent = 'ফেইসবুক আইডির লিংক (গ্রুপে অ্যাড করার জন্য):';
        formPage.querySelector('label[for="yt link"]').textContent = 'ইউটিউব চ্যানেলের লিংক (যদি থাকে):';
        formPage.querySelector('.submit-btn').textContent = 'জমা দিন';

        document.body.classList.add('bengali');
    } else {
        btn.textContent = 'Switch to বাংলা';

        // Switch content back to English
        startPage.querySelector('h1').textContent = 'BSBD OFFICIAL MULTIPLAYER GROUP JOINING REQUEST FORM';
        startPage.querySelector('p').textContent = 'Welcome to the official group joining request form. Please read the rules carefully before proceeding.';
        startPage.querySelector('.rules-caption').textContent = 'Before you start please read:';
        startPage.querySelector('.btn-start').textContent = 'START';
        startPage.querySelector('.rules ul').innerHTML = `
            <li><i class="fas fa-check"></i> Provide accurate info & ensure all questions are answered properly.</li>
            <li><i class="fas fa-bus"></i> Must join at least 1 trip per day & total of 5 trips per week.</li>
            <li><i class="fa fa-check"></i> Follow the group guidelines.</li>
            <li><i class="fa fa-check"></i> Ensure all questions are answered properly.</li>
            <li><i class="fas fa-volume-up"></i> Use appropriate language.</li>
            <li><i class="fas fa-lightbulb"></i> Be respectful and friendly to other members.</li>
        `;
        
        formPage.querySelector('h2').textContent = 'Registration Form';
        formPage.querySelector('label[for="name"]').textContent = 'Name:';
        formPage.querySelector('label[for="email"]').textContent = 'Email:';
        formPage.querySelector('label[for="game id"]').textContent = 'Game ID:';
        formPage.querySelector('label[for="uid"]').textContent = 'UID:';
        formPage.querySelector('label[for="fb link"]').textContent = 'Facebook ID Link (To add to group):';
        formPage.querySelector('label[for="yt link"]').textContent = 'YouTube Channel Link (If you have):';
        formPage.querySelector('.submit-btn').textContent = 'Submit';

        document.body.classList.remove('bengali');
    }
}

        document.getElementById('my-form').addEventListener('submit', function (e) {
    if (!confirm('Are you sure you want to submit this form?')) {
        e.preventDefault();
    }
});

