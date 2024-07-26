import moment from "moment";
import 'moment/locale/id';
import Swal from "sweetalert2";

export const getURL = () => {
    return window.location.origin === "https://undangan.alfaprima.id"
    ? "https://dev.alfaprima.id"
    // : "http://127.0.0.1:8000";
    // : "https://5xhm0xbx-7777.asse.devtunnels.ms";
    : "http://10.10.248.130:7777/backend-ap/public";
}

export const alert = (status, text) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
            popup: 'alertContainer',
        }
    });
    return Toast.fire({
        icon: `${status}`,
        title: `${text}`,
    });
};

export const confirmAlert = (title, text) => {
    return Swal.fire({
        title: `${title}`,
        text: `${text}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        customClass: {
            popup: 'confirmAlertContainer',
        }
    });
};

export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

export const formatCreatedAt = (date) => {
    return moment(date).locale('id').format('LLLL');
}

export const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
};

export const handleMusic = (action) => {
    const audioWedding = new Audio('/audio/soundWedding.mp3');
    if (action === 'play') {
        audioWedding.play();
    } else if (action === 'pause') {
        audioWedding.pause();
    }
}

export function textForWhatsapp({
    namaLengkap = 'Nama/Perusahaan',
    jenisWebsite = 'Jenis website',
    features = [],
    hargaTotal = 0,
    hargaHosting = 0,
    hargaDomain = 0,
    hargaAwal = 0,
    hargaPerBulan = 0,
    hargaTahun = 0,
    checkDomain = false,
    checkHosting = false,
}) {
return `
Nama lengkap/Perusahaan: *${namaLengkap}*
Jenis website: *${jenisWebsite}*

- Desain simple, elegan & modern
- Responsive & compatibel semua perangkat
- Pengoptimalan CEO (search Google)
- Teknologi: Next Js & Laravel
- Gratis maintenance: 1 tahun
- Hosting website
- Domain (.com / .id / lainnya)
- Admin Panel: Untuk memanajemen konten
- Database system security
- Fitur dalam website: ${features.length > 0 ? features.map((fitur, index) => `${index + 1}. ${fitur.name}`).join(', ') : 'Tidak ada fitur'}

Harga website:
*${formatRupiah(hargaTotal)}*

Biaya hosting:
*${formatRupiah(hargaHosting)} /bulan*

Biaya domain:
*${formatRupiah(hargaDomain)} /tahun*

Total pembayaran pertama:
*${formatRupiah(hargaAwal)}*

Pembayaran akhir bulan:
*${formatRupiah(hargaPerBulan)} /bulan*

Opsi lain pembayaran:
*${formatRupiah(hargaTahun)} /tahun*
`;
}