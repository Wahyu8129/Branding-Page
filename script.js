
        // Fungsi untuk membuka menu slide
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("overlay").classList.add("active");
        }

        // Fungsi untuk menutup menu slide
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("overlay").classList.remove("active");
        }

        // Fungsi untuk membuka menu profile
        function openProfile() {
            document.getElementById("profileHover").style.width = "250px";
            document.getElementById("overlay").classList.add("active");
        }

        // Fungsi untuk menutup menu profile
        function closeProfile() {
            document.getElementById("profileHover").style.width = "0";
            document.getElementById("overlay").classList.remove("active");
        }

        // Fungsi untuk membuka menu about
        function openAbout() {
            document.getElementById("aboutHover").style.width = "250px";
            document.getElementById("overlay").classList.add("active");
        }

        // Fungsi untuk menutup menu about
        function closeAbout() {
            document.getElementById("aboutHover").style.width = "0";
            document.getElementById("overlay").classList.remove("active");
        }
   