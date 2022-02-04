CREATE TABLE jurusan(
    kodeJurusan varchar primary key not null,
    namaJurusan varchar
);
insert into jurusan(kodeJurusan, namaJurusan)
values('J001', 'ATC Procedural'),
    ('J002', 'ATC Surveillance');
CREATE TABLE mahasiswa (
    nim varchar PRIMARY KEY,
    nama TEXT NOT NULL,
    alamat varchar,
    jurusan varchar NOT NULL,
    FOREIGN KEY (jurusan) REFERENCES jurusan (kodeJurusan)
);
insert into mahasiswa(nim, nama, alamat, jurusan)
values('001', 'Faiz', 'Tangerang', 'J002');
insert into mahasiswa(nim, nama, alamat, jurusan)
values('002', 'Aad', 'Lampung', 'J002');
CREATE TABLE matakuliah(
    kodeMataKuliah varchar primary key not null,
    nama varchar,
    sks varchar
);
insert into matakuliah(kodeMataKuliah, nama, sks)
values('MK001', 'Aerodrome', '4'),
    ('MK002', 'Emergency Procedure', '2');
CREATE TABLE dosen(
    nip varchar primary key not null,
    nama varchar
);
insert into dosen(nip, nama)
values('D001', 'Djoko'),
    ('D002', 'Aminarno'),
    ('D003', 'Haryanto');
CREATE TABLE kontrak (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim varchar NOT NULL,
    kodeMataKuliah varchar NOT NULL,
    nip varchar not null,
    FOREIGN KEY (nim) REFERENCES mahasiswa (nim),
    FOREIGN KEY (kodeMataKuliah) REFERENCES matakuliah (kodeMataKuliah) FOREIGN KEY (nip) REFERENCES dosen (nip)
);
insert into kontrak(nim, kodeMataKuliah, nip)
values('001', 'MK001', 'D001');
insert into kontrak(nim, kodeMataKuliah, nip)
values('001', 'MK002', 'D003');
insert into kontrak(nim, kodeMataKuliah, nip)
values('002', 'MK002', 'D002');
insert into kontrak(nim, kodeMataKuliah, nip)
values('002', 'MK001', 'D001');
select mahasiswa.nama,
    matakuliah.nama,
    dosen.nama
from mahasiswa
    join kontrak on mahasiswa.nim = kontrak.nim
    join matakuliah on kontrak.kodeMataKuliah = matakuliah.kodeMataKuliah
    join dosen on kontrak.nip = dosen.nip;