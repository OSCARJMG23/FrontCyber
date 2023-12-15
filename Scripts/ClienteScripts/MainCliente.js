// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})

//Manejo de barra lateral
document.addEventListener('DOMContentLoaded', function () {
    const sideMenuLinks = document.querySelectorAll('#sidebar .side-menu a');
    const sections = document.querySelectorAll('main .info-data > div');

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(target) {
        const selectedSection = document.querySelector(`.info-data .${target}`);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Al cargar la página
    hideAllSections();

    // Activar automáticamente la primera sección al cargar la página
    const initialSection = document.querySelector('#sidebar .side-menu a.active').getAttribute('data-target');
    showSection(initialSection);

    sideMenuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const target = link.getAttribute('data-target');

            // Ocultar todas las secciones antes de mostrar la seleccionada
            hideAllSections();

            // Mostrar la sección correspondiente al enlace clickeado
            showSection(target);

            // Cambiar clase activa en los enlaces de la barra lateral
            sideMenuLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});




