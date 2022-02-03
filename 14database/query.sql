create table jurusan(
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
create table matakuliah(
    kodeMataKuliah varchar primary key not null,
    nama varchar,
    sks varchar
);
insert into matakuliah(kodeMataKuliah, nama, sks)
values('MK001', 'Aerodrome', '4'),
    ('MK002', 'Emergency Procedure', '2');
CREATE TABLE kontrak (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim varchar NOT NULL,
    kodeMataKuliah varchar NOT NULL,
    FOREIGN KEY (nim) REFERENCES mahasiswa (nim),
    FOREIGN KEY (kodeMataKuliah) REFERENCES matakuliah (kodeMataKuliah)
);
insert into kontrak(nim, kodeMataKuliah)
values('001', 'MK001');
insert into kontrak(nim, kodeMataKuliah)
values('001', 'MK002');
insert into kontrak(nim, kodeMataKuliah)
values('002', 'MK002');
insert into kontrak(nim, kodeMataKuliah)
values('002', 'MK001');


create table dosen(nip varchar primary key not null, nama varchar);
insert into dosen(nip, nama)
values('D001', 'Djoko'),
    ('D002', 'Aminarno'),
    ('D003', 'Haryanto');
CREATE TABLE mengajar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nip varchar NOT NULL,
    kodeMataKuliah varchar NOT NULL,
    FOREIGN KEY (nip) REFERENCES dosen (nip),
    FOREIGN KEY (kodeMataKuliah) REFERENCES matakuliah (kodeMataKuliah)
);
insert into mengajar(nip, kodeMataKuliah)
values('D001', 'MK001'),('D003', 'MK002'),('D002', 'MK001'),('D002', 'MK002');

select mahasiswa.nama, kontrak.kodeMataKuliah, matakuliah.nama from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim 
join matakuliah on kontrak.kodeMataKuliah=matakuliah.kodeMataKuliah;
