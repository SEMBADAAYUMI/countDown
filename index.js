const tanggalTujuan = new Date('Aug 17, 2022 00:31:00').getTime();

const hitungMundur = setInterval(function() {

        const sekarang = new Date().getTime();
        const selisih = tanggalTujuan - sekarang;
        const hari = ~~(selisih / (1000 * 60 * 60 * 24));
        const jam = ~~(selisih % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
        const menit = ~~(selisih % (1000 * 60 * 60) / (1000 * 60));
        const detik = ~~(selisih % (1000 * 60) / 1000);
        const tex = document.getElementById('teks');
        tex.innerHTML = 'waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + 
        menit + ' menit ' + 
        detik + ' detik lagi';
        if(selisih < 0) {
            clearInterval(hitungMundur);
            alert('waktu habis');
            tex.innerHTML = 'waktu habis';
        }
    }, 1000);
        
    