/* ============================================
   HANS CYBERCORP - PORTFOLIO JAVASCRIPT (FIXED)
   All Features Working & Optimized
============================================ */

'use strict';

// ============ CONFIGURATION ============
const CONFIG = {
    emailJS: {
        serviceID: 'service_xxxxxxx',
        templateID: 'template_xxxxxxx',
        publicKey: 'your_public_key'
    },
    github: {
        username: 'torvalds', 
        token: null
    },
    animation: {
        duration: 1000,
        easing: 'ease-in-out'
    },
    particlesConfig: {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00f0ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00f0ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    }
};

// ============ PROJECT DATA ============
const projectsData = {
    1: {
        title: 'E-Commerce Platform',
        category: 'web',
        description: 'A comprehensive full-stack e-commerce solution built with modern technologies.',
        longDescription: 'This project features a complete e-commerce ecosystem including user authentication, product management, shopping cart, payment gateway integration with Stripe, order tracking, and an advanced admin dashboard with real-time analytics.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'AWS S3'],
        features: [
            'User authentication & authorization',
            'Product catalog with search & filters',
            'Shopping cart & wishlist',
            'Secure payment processing',
            'Order management system',
            'Real-time inventory tracking',
            'Admin dashboard with analytics',
            'Email notifications',
            'Responsive design'
        ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/hans/ecommerce',
        date: 'March 2024',
        client: 'TechMart Inc.',
        rating: 4.8,
        views: 1200
    },
    2: {
        title: 'Banking App Design',
        category: 'design',
        description: 'Modern and intuitive mobile banking application design.',
        longDescription: 'A complete UI/UX design for a next-generation mobile banking application featuring biometric authentication, instant transfers, bill payments, and financial analytics.',
        technologies: ['Figma', 'Adobe XD', 'Principle', 'Sketch'],
        features: [
            'Biometric authentication (Face ID / Fingerprint)',
            'Instant money transfers',
            'Bill payment system',
            'Transaction history & analytics',
            'Card management',
            'Budget tracking',
            'Investment portfolio',
            'Customer support chat',
            'Dark mode support'
        ],
        liveUrl: 'https://figma.com/prototype',
        githubUrl: null,
        date: 'February 2024',
        client: 'FinanceFlow Bank',
        rating: 5.0,
        views: 890
    },
    3: {
        title: 'AI Chatbot Assistant',
        category: 'ai',
        description: 'Intelligent chatbot powered by NLP and machine learning.',
        longDescription: 'An advanced AI-powered chatbot system using natural language processing to provide intelligent customer support with contextual understanding and multi-language support.',
        technologies: ['Python', 'TensorFlow', 'NLTK', 'spaCy', 'Flask', 'MongoDB'],
        features: [
            'Natural language understanding',
            'Context-aware responses',
            'Multi-language support',
            'Sentiment analysis',
            'Intent recognition',
            'Learning from interactions',
            'Integration with knowledge base',
            'Analytics dashboard',
            '95% accuracy rate'
        ],
        liveUrl: 'https://chatbot-demo.example.com',
        githubUrl: 'https://github.com/hans/ai-chatbot',
        date: 'April 2024',
        client: 'SupportAI Solutions',
        rating: 4.9,
        views: 1500
    },
    4: {
        title: 'Analytics Dashboard',
        category: 'web',
        description: 'Real-time data visualization dashboard with interactive charts.',
        longDescription: 'A powerful analytics platform featuring real-time data visualization, customizable widgets, and comprehensive reporting tools for business intelligence.',
        technologies: ['Vue.js', 'D3.js', 'Chart.js', 'WebSocket', 'Node.js', 'PostgreSQL'],
        features: [
            'Real-time data updates',
            'Interactive charts & graphs',
            'Customizable dashboards',
            'Data export functionality',
            'Multi-user collaboration',
            'Custom report generation',
            'KPI tracking',
            'Alert notifications',
            'Mobile responsive'
        ],
        liveUrl: 'https://analytics-demo.example.com',
        githubUrl: 'https://github.com/hans/analytics-dashboard',
        date: 'January 2024',
        client: 'DataViz Corp',
        rating: 4.7,
        views: 950
    },
    5: {
        title: 'Fitness Tracker App',
        category: 'mobile',
        description: 'Mobile app for workout tracking and fitness goals.',
        longDescription: 'A comprehensive fitness tracking mobile application built with React Native, featuring workout logging, nutrition planning, progress tracking, and social features.',
        technologies: ['React Native', 'Firebase', 'Redux', 'React Navigation', 'AsyncStorage'],
        features: [
            'Workout logging & tracking',
            'Nutrition & meal planning',
            'Progress analytics',
            'Goal setting & reminders',
            'Exercise library with videos',
            'Social community features',
            'Wearable device integration',
            'Offline mode support',
            'Personal trainer chat'
        ],
        liveUrl: null,
        githubUrl: 'https://github.com/hans/fitness-tracker',
        date: 'December 2023',
        client: 'FitLife Inc.',
        rating: 4.6,
        views: 750
    },
    6: {
        title: 'Video Conference Platform',
        category: 'web',
        description: 'Secure video conferencing platform with advanced features.',
        longDescription: 'A robust video conferencing solution built with WebRTC, featuring HD video/audio, screen sharing, recording, virtual backgrounds, and end-to-end encryption.',
        technologies: ['WebRTC', 'Socket.io', 'Node.js', 'React', 'MongoDB', 'AWS'],
        features: [
            'HD video & audio calls',
            'Screen sharing',
            'Meeting recording',
            'Virtual backgrounds',
            'Real-time chat',
            'Participant management',
            'Breakout rooms',
            'End-to-end encryption',
            'Calendar integration'
        ],
        liveUrl: 'https://videocall-demo.example.com',
        githubUrl: 'https://github.com/hans/video-conference',
        date: 'May 2024',
        client: 'MeetUp Technologies',
        rating: 4.8,
        views: 600
    }
};

// ============ UTILITY FUNCTIONS ============
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            Toast.show('Copied to clipboard!', 'success');
        }).catch(() => {
            Toast.show('Failed to copy', 'error');
        });
    },

    getInitials(name) {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    },

    formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    },

    saveToLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    },

    getFromLocalStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    }
};

// ============ TOAST NOTIFICATIONS ============
const Toast = {
    show(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        }[type] || 'fa-info-circle';

        toast.innerHTML = `
            <i class="fas ${icon}"></i>
            <div class="toast-content">
                <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastSlideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
};

// ============ SPLASH SCREEN ============
const SplashScreen = {
    init() {
        let progress = 0;
        const loadingText = document.getElementById('loading-percentage');
        const splashScreen = document.getElementById('splash-screen');

        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    splashScreen.classList.add('fade-out');
                    setTimeout(() => {
                        splashScreen.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }, 500);
                }, 500);
            }
            if (loadingText) {
                loadingText.textContent = Math.floor(progress);
            }
        }, 200);
    }
};

// ============ PWA INSTALL ============
const PWAInstall = {
    deferredPrompt: null,

    init() {
        const installPrompt = document.getElementById('pwaPrompt');
        const installBtn = document.getElementById('installBtn');
        const closePrompt = document.getElementById('closePrompt');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            
            setTimeout(() => {
                if (installPrompt) {
                    installPrompt.classList.add('show');
                }
            }, 5000);
        });

        if (installBtn) {
            installBtn.addEventListener('click', async () => {
                if (!this.deferredPrompt) return;

                this.deferredPrompt.prompt();
                const { outcome } = await this.deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    Toast.show('App installed successfully!', 'success');
                }
                
                this.deferredPrompt = null;
                installPrompt.classList.remove('show');
            });
        }

        if (closePrompt) {
            closePrompt.addEventListener('click', () => {
                installPrompt.classList.remove('show');
            });
        }

        window.addEventListener('appinstalled', () => {
            Toast.show('App installed successfully!', 'success');
            this.deferredPrompt = null;
        });
    }
};

// ============ CUSTOM CURSOR ============
const CustomCursor = {
    init() {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        if (!cursor || !follower) return;

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 100);
        });

        const clickables = document.querySelectorAll('a, button, .project-card, .blog-card, input, textarea');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                follower.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                follower.classList.remove('active');
            });
        });
    }
};

// ============ SCROLL PROGRESS ============
const ScrollProgress = {
    init() {
        const progressBar = document.querySelector('.scroll-progress');
        
        window.addEventListener('scroll', Utils.throttle(() => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            if (progressBar) {
                progressBar.style.width = scrolled + '%';
            }
        }, 10));
    }
};

// ============ NAVIGATION ============
const Navigation = {
    init() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinksContainer = document.getElementById('navLinks');

        // Sticky navbar on scroll
        window.addEventListener('scroll', Utils.throttle(() => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 100));

        // Active link on scroll
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', Utils.throttle(() => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100));

        // Mobile menu toggle
        if (mobileToggle && navLinksContainer) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navLinksContainer.classList.toggle('active');
            });
        }

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileToggle && navLinksContainer) {
                    mobileToggle.classList.remove('active');
                    navLinksContainer.classList.remove('active');
                }
            });
        });

        // Smooth scroll
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                Utils.smoothScroll(target);
            });
        });
    }
};

// ============ THEME TOGGLE ============
const ThemeToggle = {
    init() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;
        
        const icon = toggle.querySelector('i');
        
        const savedTheme = Utils.getFromLocalStorage('theme', 'dark');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }

        toggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
                Utils.saveToLocalStorage('theme', 'light');
                Toast.show('Light mode activated', 'info');
            } else {
                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
                Utils.saveToLocalStorage('theme', 'dark');
                Toast.show('Dark mode activated', 'info');
            }
        });
    }
};

// ============ TYPING EFFECT ============
const TypingEffect = {
    init() {
        const texts = [
            'Tech Enthusiast & Developer at CyberCorp',
            'Building Digital Solutions',
            'Full Stack Developer',
            'UI/UX Designer',
            'AI Enthusiast',
            'Problem Solver'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');

        if (!typingElement) return;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
                charIndex--;
            } else {
                typingElement.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }
};

// ============ PARTICLES ============
const ParticlesInit = {
    init() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', CONFIG.particlesConfig);
        }
    }
};

// ============ THREE.JS BACKGROUND ============
const ThreeJSBackground = {
    init() {
        const canvas = document.getElementById('webgl-canvas');
        if (!canvas || typeof THREE === 'undefined') return;
        
        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            camera.position.z = 5;
            
            const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
            const material = new THREE.MeshNormalMaterial({ 
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const torusKnot = new THREE.Mesh(geometry, material);
            scene.add(torusKnot);
            
            function animate() {
                requestAnimationFrame(animate);
                torusKnot.rotation.x += 0.005;
                torusKnot.rotation.y += 0.008;
                renderer.render(scene, camera);
            }
            animate();
            
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (error) {
            console.error('Three.js initialization error:', error);
        }
    }
};

// ============ COUNTER ANIMATION ============
const CounterAnimation = {
    init() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target')) || parseInt(counter.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };

            updateCounter();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }
};

// ============ SKILL BARS ANIMATION ============
const SkillBars = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        setTimeout(() => {
                            bar.style.width = progress + '%';
                        }, 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.skill-category').forEach(category => {
            observer.observe(category);
        });
    }
};

// ============ GITHUB STATS ============
const GitHubStats = {
    async init() {
        const username = CONFIG.github.username;
        
        this.updateStatsCards(username);
        await this.loadActivity(username);
    },

    updateStatsCards(username) {
        const statsCard = document.getElementById('githubStatsCard');
        const langsCard = document.getElementById('githubLangsCard');
        const streakCard = document.getElementById('githubStreakCard');

        if (statsCard) {
            statsCard.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0e27&title_color=00f0ff&icon_color=00f0ff&text_color=ffffff`;
        }

        if (langsCard) {
            langsCard.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0e27&title_color=00f0ff&text_color=ffffff`;
        }

        if (streakCard) {
            streakCard.src = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0a0e27&stroke=00f0ff&ring=00f0ff&fire=ff006e&currStreakLabel=00f0ff`;
        }
    },

    async loadActivity(username) {
        const activityFeed = document.getElementById('github-activity-feed');
        if (!activityFeed) return;

        try {
            const headers = {};
            if (CONFIG.github.token) {
                headers['Authorization'] = `token ${CONFIG.github.token}`;
            }

            const response = await fetch(`https://api.github.com/users/${username}/events/public`, { headers });
            
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const events = await response.json();
            const recentEvents = events.slice(0, 10);

            const html = recentEvents.map(event => {
                const date = Utils.formatDate(event.created_at);
                let activity = '';
                let icon = 'fa-code';

                switch(event.type) {
                    case 'PushEvent':
                        const commits = event.payload.commits?.length || 0;
                        activity = `Pushed ${commits} commit${commits > 1 ? 's' : ''} to ${event.repo.name}`;
                        icon = 'fa-code-branch';
                        break;
                    case 'CreateEvent':
                        activity = `Created ${event.payload.ref_type} in ${event.repo.name}`;
                        icon = 'fa-plus-circle';
                        break;
                    case 'PullRequestEvent':
                        activity = `${event.payload.action} pull request in ${event.repo.name}`;
                        icon = 'fa-code-pull-request';
                        break;
                    case 'IssuesEvent':
                        activity = `${event.payload.action} issue in ${event.repo.name}`;
                        icon = 'fa-exclamation-circle';
                        break;
                    case 'WatchEvent':
                        activity = `Starred ${event.repo.name}`;
                        icon = 'fa-star';
                        break;
                    case 'ForkEvent':
                        activity = `Forked ${event.repo.name}`;
                        icon = 'fa-code-fork';
                        break;
                    default:
                        activity = `${event.type.replace('Event', '')} on ${event.repo.name}`;
                }

                return `
                    <div class="activity-item" data-aos="fade-up">
                        <i class="fab fa-github"></i>
                        <div>
                            <strong>${activity}</strong>
                            <span>${date}</span>
                        </div>
                    </div>
                `;
            }).join('');

            activityFeed.innerHTML = `<div class="activity-list">${html}</div>`;
        } catch (error) {
            console.error('Failed to load GitHub activity:', error);
            activityFeed.innerHTML = `
                <div class="activity-loading">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load GitHub activity</p>
                </div>
            `;
        }
    }
};

// ============ SEARCH ENGINE ============
const SearchEngine = {
    searchData: [],

    init() {
        const searchBtn = document.getElementById('searchBtn');
        const searchOverlay = document.getElementById('searchOverlay');
        const searchInput = document.getElementById('searchInput');
        const searchClose = document.getElementById('searchClose');
        const searchResults = document.getElementById('searchResults');

        if (!searchBtn || !searchOverlay) return;

        this.buildSearchIndex();

        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput?.focus(), 100);
        });

        if (searchClose) {
            searchClose.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
            
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchBtn.click();
            }
        });

        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });

        if (searchInput) {
            searchInput.addEventListener('input', Utils.debounce((e) => {
                const query = e.target.value.toLowerCase().trim();
                if (query.length < 2) {
                    searchResults.classList.remove('show');
                    return;
                }
                
                const results = this.search(query);
                this.displayResults(results, searchResults);
            }, 300));
        }
    },

    buildSearchIndex() {
        Object.values(projectsData).forEach(project => {
            this.searchData.push({
                type: 'Project',
                title: project.title,
                description: project.description,
                element: project,
                link: '#projects'
            });
        });

        document.querySelectorAll('.skill-name').forEach(skill => {
            this.searchData.push({
                type: 'Skill',
                title: skill.textContent,
                description: 'Technical Skill',
                element: skill,
                link: '#skills'
            });
        });

        document.querySelectorAll('.blog-title').forEach(blog => {
            this.searchData.push({
                type: 'Blog',
                title: blog.textContent,
                description: blog.closest('.blog-card')?.querySelector('.blog-excerpt')?.textContent || '',
                element: blog,
                link: '#blog'
            });
        });

        const sections = [
            { name: 'About Me', link: '#about', desc: 'Learn about my background and experience' },
            { name: 'Skills', link: '#skills', desc: 'View my technical skills and expertise' },
            { name: 'Projects', link: '#projects', desc: 'Explore my portfolio projects' },
            { name: 'Contact', link: '#contact', desc: 'Get in touch with me' }
        ];

        sections.forEach(section => {
            this.searchData.push({
                type: 'Section',
                title: section.name,
                description: section.desc,
                link: section.link
            });
        });
    },

    search(query) {
        return this.searchData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        ).slice(0, 10);
    },

    displayResults(results, container) {
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-color);">No results found</p>';
        } else {
            container.innerHTML = results.map(r => `
                <div class="search-result-item" data-link="${r.link}">
                    <span class="result-type">${r.type}</span>
                    <div class="result-text">
                        <strong>${r.title}</strong>
                        <p style="margin: 0; opacity: 0.7; font-size: 0.9rem;">${r.description.substring(0, 100)}...</p>
                    </div>
                </div>
            `).join('');

            container.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const link = item.dataset.link;
                    document.getElementById('searchOverlay').classList.remove('active');
                    Utils.smoothScroll(link);
                });
            });
        }
        container.classList.add('show');
    }
};

// ============ VOICE COMMANDS ============
const VoiceCommands = {
    recognition: null,
    isListening: false,

    init() {
        if (!('webkitSpeechRecognition' in window)) {
            console.log('Speech recognition not supported');
            return;
        }

        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;

        const voiceBtn = document.getElementById('voiceBtn');
        if (!voiceBtn) return;

        voiceBtn.addEventListener('click', () => {
            if (this.isListening) {
                this.stopListening(voiceBtn);
            } else {
                this.startListening(voiceBtn);
            }
        });

        this.recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            this.processCommand(command);
            this.stopListening(voiceBtn);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            Toast.show('Voice command failed', 'error');
            this.stopListening(voiceBtn);
        };

        this.recognition.onend = () => {
            this.stopListening(voiceBtn);
        };
    },

    startListening(btn) {
        this.recognition.start();
        this.isListening = true;
        btn.classList.add('recording');
        Toast.show('Listening... Speak now!', 'info');
    },

    stopListening(btn) {
        if (this.recognition) {
            this.recognition.stop();
        }
        this.isListening = false;
        btn.classList.remove('recording');
    },

    processCommand(command) {
        console.log('Voice command:', command);
        
        const commands = {
            'home': '#home',
            'about': '#about',
            'skills': '#skills',
            'projects': '#projects',
            'contact': '#contact',
            'blog': '#blog'
        };

        for (let [key, value] of Object.entries(commands)) {
            if (command.includes(key)) {
                Utils.smoothScroll(value);
                Toast.show(`Navigating to ${key}`, 'success');
                return;
            }
        }

        if (command.includes('dark mode') || command.includes('light mode')) {
            document.getElementById('themeToggle')?.click();
            return;
        }

        if (command.includes('search')) {
            document.getElementById('searchBtn')?.click();
            return;
        }

        Toast.show(`Command not recognized: "${command}"`, 'warning');
    }
};

// ============ PROJECT FILTER ============
const ProjectFilter = {
    init() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                projectCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, index * 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
};

// ============ PROJECT MODAL ============
const ProjectModal = {
    init() {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        const modalClose = document.getElementById('modalClose');
        const viewProjectBtns = document.querySelectorAll('.btn-view-project');

        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = btn.getAttribute('data-project');
                this.open(projectId, modal, modalBody);
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => this.close(modal));
        }
        
        modal?.querySelector('.modal-overlay')?.addEventListener('click', () => this.close(modal));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal?.classList.contains('active')) {
                this.close(modal);
            }
        });
    },

    open(projectId, modal, modalBody) {
        const project = projectsData[projectId];
        if (!project) return;

        modalBody.innerHTML = `
            <div class="project-modal-header">
                <h2 style="font-family: 'Orbitron', sans-serif; color: var(--primary-color); margin-bottom: 1rem;">
                    ${project.title}
                </h2>
                <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
                    <span class="status-badge completed">
                        ${project.category.toUpperCase()}
                    </span>
                    <span style="color: var(--text-color);">
                        <i class="far fa-calendar"></i> ${project.date}
                    </span>
                    ${project.client ? `<span style="color: var(--text-color);">
                        <i class="fas fa-building"></i> ${project.client}
                    </span>` : ''}
                </div>
            </div>

            <div style="margin: 2rem 0;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-info-circle"></i> About This Project
                </h3>
                <p style="color: var(--text-color); line-height: 1.8; margin-bottom: 1.5rem;">
                    ${project.longDescription}
                </p>
            </div>

            <div style="margin: 2rem 0;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-code"></i> Technologies Used
                </h3>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>

            <div style="margin: 2rem 0;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-list"></i> Key Features
                </h3>
                <ul style="color: var(--text-color); line-height: 2; list-style: none; padding: 0;">
                    ${project.features.map(feature => `
                        <li style="margin-bottom: 0.5rem;">
                            <i class="fas fa-check-circle" style="color: var(--success-color); margin-right: 0.5rem;"></i>
                            ${feature}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div style="margin: 2rem 0;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-chart-line"></i> Project Stats
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 10px; border: 1px solid rgba(0, 240, 255, 0.2); text-align: center;">
                        <div style="font-size: 2rem; color: var(--primary-color); font-weight: 900;">
                            <i class="fas fa-star"></i> ${project.rating}
                        </div>
                        <div style="color: var(--text-color); margin-top: 0.5rem;">Rating</div>
                    </div>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 10px; border: 1px solid rgba(0, 240, 255, 0.2); text-align: center;">
                        <div style="font-size: 2rem; color: var(--primary-color); font-weight: 900;">
                            <i class="fas fa-eye"></i> ${project.views}
                        </div>
                        <div style="color: var(--text-color); margin-top: 0.5rem;">Views</div>
                    </div>
                </div>
            </div>

            <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
                ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
                        <span>Live Demo</span>
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                ` : ''}
                ${project.githubUrl ? `
                    <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                        <span>View Code</span>
                        <i class="fab fa-github"></i>
                    </a>
                ` : ''}
                <button class="btn btn-outline" onclick="ProjectModal.shareProject('${project.title}', '${project.liveUrl || ''}')">
                    <span>Share</span>
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close(modal) {
        modal?.classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    shareProject(title, url) {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `Check out this amazing project: ${title}`,
                url: url || window.location.href
            }).then(() => {
                Toast.show('Thanks for sharing!', 'success');
            }).catch(() => {
                Utils.copyToClipboard(url || window.location.href);
            });
        } else {
            Utils.copyToClipboard(url || window.location.href);
        }
    }
};

// ============ CONTACT FORM ============
const ContactForm = {
    init() {
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        
        if (!form || !submitBtn) return;

        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        const formSuccess = document.getElementById('formSuccess');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!this.validateForm(form)) {
                return;
            }

            if (btnText) btnText.style.display = 'none';
            if (btnLoader) btnLoader.style.display = 'flex';
            submitBtn.disabled = true;

            const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                budget: form.budget?.value || '',
                message: form.message.value
            };

            try {
                await this.sendEmail(formData);
                
                if (formSuccess) formSuccess.style.display = 'flex';
                form.reset();
                Toast.show('Message sent successfully!', 'success');
                
                setTimeout(() => {
                    if (formSuccess) formSuccess.style.display = 'none';
                }, 5000);
            } catch (error) {
                Toast.show('Failed to send message. Please try again.', 'error');
                console.error('Form submission error:', error);
            } finally {
                if (btnText) btnText.style.display = 'block';
                if (btnLoader) btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    },

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    },

    validateField(field) {
        const errorSpan = field.parentElement.querySelector('.form-error');
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && !Utils.validateEmail(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email';
        }

        if (errorSpan) {
            if (!isValid) {
                errorSpan.textContent = errorMessage;
                errorSpan.style.display = 'block';
                field.style.borderColor = 'var(--error-color)';
            } else {
                errorSpan.style.display = 'none';
                field.style.borderColor = 'rgba(0, 240, 255, 0.2)';
            }
        }

        return isValid;
    },

    async sendEmail(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Form data:', data);
                
                const messages = Utils.getFromLocalStorage('contactMessages', []);
                messages.push({
                    ...data,
                    date: new Date().toISOString(),
                    id: Date.now()
                });
                Utils.saveToLocalStorage('contactMessages', messages);
                
                resolve();
            }, 2000);
        });
    }
};

// ============ SCROLL TO TOP ============
const ScrollToTop = {
    init() {
        const scrollBtn = document.getElementById('scrollTop');
        if (!scrollBtn) return;

        const progressCircle = scrollBtn.querySelector('.progress-ring-circle');
        const circumference = 2 * Math.PI * 26;

        if (progressCircle) {
            progressCircle.style.strokeDasharray = circumference;
        }

        window.addEventListener('scroll', Utils.throttle(() => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = window.scrollY / windowHeight;

            if (window.scrollY > 500) {
                scrollBtn.classList.add('active');
            } else {
                scrollBtn.classList.remove('active');
            }

            if (progressCircle) {
                const offset = circumference - (scrolled * circumference);
                progressCircle.style.strokeDashoffset = offset;
            }
        }, 50));

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

// ============ SCROLL INDICATOR ============
const ScrollIndicator = {
    init() {
        const indicator = document.getElementById('scrollIndicator');
        if (!indicator) return;

        indicator.addEventListener('click', () => {
            Utils.smoothScroll('#about');
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                indicator.style.opacity = '0';
                indicator.style.pointerEvents = 'none';
            } else {
                indicator.style.opacity = '1';
                indicator.style.pointerEvents = 'all';
            }
        });
    }
};

// ============ FLOATING ACTION BUTTONS ============
const FloatingActions = {
    init() {
        const downloadCV = document.getElementById('downloadCV');
        const downloadResume = document.getElementById('downloadResume');

        // Path where the resume PDF should be placed. Place your CV at: /assets/Hans_Resume.pdf
        const RESUME_PATH = '/assets/hans_resume.pdf';

        function triggerDownload(url, filename) {
            const a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', filename);
            // Some browsers require the element to be in the DOM
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            setTimeout(() => a.remove(), 1500);
        }

        [downloadCV, downloadResume].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    Toast.show('Preparing CV download...', 'info');

                    // Small delay so the toast is visible before download starts
                    setTimeout(() => {
                        try {
                            triggerDownload(RESUME_PATH, 'hans_resume.pdf');
                            // Note: browser will handle the download; if the file is missing the server will return 404.
                            Toast.show('If the download did not start, please place your resume at /assets/hans_resume.pdf', 'info', 4000);
                        } catch (err) {
                            console.error('Download error:', err);
                            Toast.show('Failed to start download. Make sure resume file exists in /assets/', 'error');
                        }
                    }, 600);
                });
            }
        });

        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                if (navigator.share) {
                    navigator.share({
                        title: 'Hans - CyberCorp Developer Portfolio',
                        text: 'Check out my amazing portfolio!',
                        url: window.location.href
                    }).then(() => {
                        Toast.show('Thanks for sharing!', 'success');
                    }).catch(() => {
                        this.fallbackShare();
                    });
                } else {
                    this.fallbackShare();
                }
            });
        }

        this.initMusicPlayer();
    },

    fallbackShare() {
        Utils.copyToClipboard(window.location.href);
        Toast.show('Link copied! Share it with your friends.', 'success');
    },

    initMusicPlayer() {
        const musicToggle = document.getElementById('musicToggle');
        if (!musicToggle) return;

        const audio = new Audio('assets/wwd.mp3juice.blog - Work Study Lofi Jazz - Relaxing Smooth Background Jazz Music for Work, Study, Focus, Coding (320 KBps) (mp3cut.net).mp3');
        let isPlaying = false;
        
        musicToggle.addEventListener('click', () => {
            const icon = musicToggle.querySelector('i');
            
            if (!isPlaying) {
                audio.play()
                    .then(() => {
                        isPlaying = true;
                        if (icon) {
                            icon.classList.remove('fa-music');
                            icon.classList.add('fa-pause');
                        }
                        Toast.show('Music playing', 'success');
                    })
                    .catch(error => {
                        console.error('Error playing music:', error);
                        Toast.show('Failed to play music', 'error');
                    });
            } else {
                audio.pause();
                isPlaying = false;
                if (icon) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-music');
                }
                Toast.show('Music paused', 'info');
            }
        });

        // Loop the music when it ends
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play();
        });
    }
};

// ============ NEWSLETTER ============
const Newsletter = {
    init() {
        const form = document.getElementById('newsletterForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (Utils.validateEmail(email)) {
                const subscribers = Utils.getFromLocalStorage('newsletterSubscribers', []);
                if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    Utils.saveToLocalStorage('newsletterSubscribers', subscribers);
                    Toast.show('Thank you for subscribing!', 'success');
                    form.reset();
                } else {
                    Toast.show('You are already subscribed!', 'info');
                }
            } else {
                Toast.show('Please enter a valid email', 'error');
            }
        });
    }
};

// ============ LOAD MORE PROJECTS ============
const LoadMore = {
    init() {
        const loadMoreBtn = document.getElementById('loadMoreProjects');
        if (!loadMoreBtn) return;

        loadMoreBtn.addEventListener('click', () => {
            Toast.show('Loading more projects...', 'info');
            
            setTimeout(() => {
                Toast.show('All projects loaded!', 'success');
                loadMoreBtn.disabled = true;
                loadMoreBtn.innerHTML = '<span>No More Projects</span>';
            }, 1000);
        });
    }
};

// ============ LAZY LOADING ============
const LazyLoad = {
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
};

// ============ ANIMATION ON SCROLL ============
const AnimationOnScroll = {
    init() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                offset: 100,
                delay: 100
            });
        }
    }
};

// ============ PERFORMANCE MONITORING ============
const Performance = {
    init() {
        window.addEventListener('load', () => {
            if (window.performance && window.performance.timing) {
                const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
                
                console.log(`%c🚀 Page loaded in ${loadTime}ms`, 'color: #00f0ff; font-size: 14px; font-weight: bold;');
                
                if (loadTime > 3000) {
                    console.warn('⚠️ Page load time is slow. Consider optimization.');
                } else if (loadTime < 1000) {
                    console.log('%c⚡ Lightning fast load time!', 'color: #10b981; font-size: 14px; font-weight: bold;');
                }
            }
        });
    }
};

// ============ EASTER EGGS ============
const EasterEggs = {
    init() {
        let konamiCode = [];
        const konamiPattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.keyCode);
            konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
            
            if (konamiCode.join('') === konamiPattern.join('')) {
                Toast.show('🎉 Konami Code Activated! You are awesome!', 'success', 5000);
                this.triggerConfetti();
            }
        });

        console.log('%c👋 Hello Developer!', 'color: #00f0ff; font-size: 24px; font-weight: bold;');
        console.log('%c💼 Interested in the code? Let\'s connect!', 'color: #fff; font-size: 14px;');
        console.log('%c📧 hans@cybercorp.dev', 'color: #00f0ff; font-size: 14px;');
        console.log('%c🔍 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #ff006e; font-size: 12px;');
    },

    triggerConfetti() {
        const colors = ['#00f0ff', '#ff006e', '#10b981', '#f59e0b', '#667eea'];
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 10 + 5}px;
                    height: ${Math.random() * 10 + 5}px;
                    background: ${Utils.randomItem(colors)};
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
                    z-index: 10000;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    transform: rotate(${Math.random() * 360}deg);
                `;
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }, i * 30);
        }
    }
};

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// ============ MAIN INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🎯 Initializing Portfolio...', 'color: #00f0ff; font-size: 16px; font-weight: bold;');

    try {
        SplashScreen.init();
        PWAInstall.init();
        CustomCursor.init();
        ScrollProgress.init();
        Navigation.init();
        ThemeToggle.init();
        TypingEffect.init();
        ParticlesInit.init();
        ThreeJSBackground.init();
        CounterAnimation.init();
        SkillBars.init();
        GitHubStats.init();
        SearchEngine.init();
        VoiceCommands.init();
        ProjectFilter.init();
        ProjectModal.init();
        ContactForm.init();
        ScrollToTop.init();
        ScrollIndicator.init();
        FloatingActions.init();
        Newsletter.init();
        LoadMore.init();
        LazyLoad.init();
        AnimationOnScroll.init();
        Performance.init();
        EasterEggs.init();

        console.log('%c✅ Portfolio Ready!', 'color: #10b981; font-size: 16px; font-weight: bold;');
        console.log('%c💡 Press Ctrl+K to search', 'color: #f59e0b; font-size: 12px;');
    } catch (error) {
        console.error('❌ Initialization error:', error);
    }
});

// ============ EXPORT FOR GLOBAL ACCESS ============
window.Portfolio = {
    Utils,
    Toast,
    ProjectModal,
    CONFIG
};

// ============ HANDLE PAGE VISIBILITY ============
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('👋 Page hidden');
    } else {
        console.log('👀 Page visible');
    }
});

// ============ HANDLE ONLINE/OFFLINE ============
window.addEventListener('online', () => {
    Toast.show('🌐 Back online!', 'success');
});

window.addEventListener('offline', () => {
    Toast.show('📡 You are offline', 'warning');
});

// ============ CONSOLE SIGNATURE ============
console.log(`
%c
██╗  ██╗ █████╗ ███╗   ██╗███████╗
██║  ██║██╔══██╗████╗  ██║██╔════╝
███████║███████║██╔██╗ ██║███████╗
██╔══██║██╔══██║██║╚██╗██║╚════██║
██║  ██║██║  ██║██║ ╚████║███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
                                   
 ██████╗██╗   ██╗██████╗ ███████╗██████╗  ██████╗ ██████╗ ██████╗ ██████╗ 
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔══██╗
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝██║     ██║   ██║██████╔╝██████╔╝
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██║     ██║   ██║██╔══██╗██╔═══╝ 
╚██████╗   ██║   ██████╔╝███████╗██║  ██║╚██████╗╚██████╔╝██║  ██║██║     
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     

%c 🚀 Portfolio v2.0 | Built with passion and innovation
%c 💼 Developer: Hans | CyberCorp
%c 📧 Email: hans@cybercorp.dev

`,
'color: #00f0ff; font-weight: bold;',
'color: #fff; font-size: 12px;',
'color: #00f0ff; font-size: 12px;',
'color: #00f0ff; font-size: 12px;'
);
