document.addEventListener('DOMContentLoaded', () => {
    const talksData = [
        {
            time: '10:00 AM - 11:00 AM',
            title: 'The Future of AI in Software Development',
            speakers: ['Alice Smith'],
            category: ['AI', 'Machine Learning', 'Software Engineering'],
            description: 'An in-depth look at how artificial intelligence is transforming the landscape of software development, from automated code generation to intelligent debugging systems.'
        },
        {
            time: '11:10 AM - 12:10 PM',
            title: 'Modern Web Architectures: Microfrontends and Beyond',
            speakers: ['Bob Johnson', 'Carol White'],
            category: ['Web Development', 'Architecture', 'Frontend'],
            description: 'Explore the latest trends in web architecture, focusing on microfrontends, serverless functions, and performance optimization techniques for large-scale applications.'
        },
        {
            time: '12:20 PM - 01:20 PM',
            title: 'Securing Your Cloud Native Applications',
            speakers: ['David Green'],
            category: ['Security', 'Cloud', 'DevOps'],
            description: 'Best practices and essential strategies for securing applications deployed in cloud-native environments, covering topics like container security, IAM, and network policies.'
        },
        {
            time: '01:20 PM - 02:20 PM',
            isBreak: true,
            title: 'Lunch Break',
            description: 'Enjoy a delicious lunch and network with fellow attendees!'
        },
        {
            time: '02:20 PM - 03:20 PM',
            title: 'Data Engineering with Apache Kafka',
            speakers: ['Eve Black'],
            category: ['Data Engineering', 'Big Data', 'Streaming'],
            description: 'A practical guide to building robust data pipelines and real-time analytics solutions using Apache Kafka and its ecosystem.'
        },
        {
            time: '03:30 PM - 04:30 PM',
            title: 'Demystifying Blockchain for Developers',
            speakers: ['Frank Blue', 'Grace Red'],
            category: ['Blockchain', 'Distributed Systems'],
            description: 'Understand the core concepts of blockchain technology and how developers can leverage it to build decentralized applications and smart contracts.'
        },
        {
            time: '04:40 PM - 05:40 PM',
            title: 'Effective API Design and Management',
            speakers: ['Hannah Yellow'],
            category: ['API', 'Backend', 'Software Engineering'],
            description: 'Learn the principles of designing effective, scalable, and maintainable APIs, along with strategies for documentation, versioning, and API gateway management.'
        }
    ];

    const scheduleContainer = document.getElementById('scheduleContainer');
    const categorySearchInput = document.getElementById('categorySearch');

    function renderSchedule(filterCategory = '') {
        scheduleContainer.innerHTML = ''; // Clear existing schedule

        talksData.forEach(item => {
            if (item.isBreak) {
                scheduleContainer.innerHTML += `
                    <div class="lunch-break">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p>${item.time}</p>
                    </div>
                `;
            } else {
                const categories = item.category.join(', ');
                const speakers = item.speakers.join(' and ');
                const isHidden = filterCategory && !categories.toLowerCase().includes(filterCategory.toLowerCase());

                scheduleContainer.innerHTML += `
                    <div class="talk-card ${isHidden ? 'hidden' : ''}" data-category="${categories.toLowerCase()}">
                        <h3>${item.title}</h3>
                        <p><strong>Time:</strong> ${item.time}</p>
                        <p class="speakers"><strong>Speakers:</strong> ${speakers}</p>
                        <p class="category"><strong>Category:</strong> ${categories}</p>
                        <p>${item.description}</p>
                    </div>
                `;
            }
        });
    }

    // Initial render
    renderSchedule();

    // Search functionality
    categorySearchInput.addEventListener('input', (event) => {
        renderSchedule(event.target.value.trim());
    });
});
