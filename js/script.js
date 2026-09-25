/* ==========================================================================
   REANTY - SCROLL SPY & ACTIVE MENU NAVIGATION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
	const sections = document.querySelectorAll('section[id]');
	const menuToggle = document.getElementById('menu-toggle');

	function updateActiveNav() {
		let currentSectionId = '';
		const scrollPos = window.scrollY + 180; // Offset for fixed navbar

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
				currentSectionId = section.getAttribute('id');
			}
		});

		if (currentSectionId) {
			navLinks.forEach((link) => {
				const href = link.getAttribute('href');
				if (href === `#${currentSectionId}`) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			});
		}
	}

	// Instant active state on click
	navLinks.forEach((link) => {
		link.addEventListener('click', function () {
			navLinks.forEach((item) => item.classList.remove('active'));
			this.classList.add('active');

			// Auto close mobile hamburger menu on selection
			if (menuToggle && menuToggle.checked) {
				menuToggle.checked = false;
			}
		});
	});

	// Window scroll event listener
	window.addEventListener('scroll', updateActiveNav, { passive: true });

	// Initial trigger on load
	updateActiveNav();
});
