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

ALTER TABLE mahasiswa add COLUMN 
tanggal_lahir DATE;

UPDATE mahasiswa
SET tanggal_lahir = '1995-09-24'
WHERE nim = '001';

UPDATE mahasiswa
SET tanggal_lahir = '1997-11-13'
WHERE nim = '002';

insert into mahasiswa(nim, nama, alamat, jurusan, tanggal_lahir)
values('003', 'Faisal', 'Cianjur', 'J002','2002-10-15'),
('004', 'Diaz', 'Sumbawa', 'J002','2003-01-12'),
('005', 'Aldi', 'Tangerang', 'J002','2003-04-02'),
('006', 'Cahyo', 'Solo', 'J002','2002-03-23');


CREATE TABLE matakuliah(
    kodeMataKuliah varchar primary key not null,
    nama varchar,
    sks varchar
);
insert into matakuliah(kodeMataKuliah, nama, sks)
values('MK001', 'Aerodrome', '4'),
    ('MK002', 'Emergency Procedure', '2');
insert into matakuliah(kodeMataKuliah, nama, sks)
values('MK003', 'data mining', '4'),
('MK004', 'Electronics', '4'),
('MK005', 'Rules of the Air', '2'),
('MK006', 'Meteorology', '4');


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
values('002', 'MK001', 'D001'
);
ALTER TABLE kontrak add COLUMN 
nilai VARCHAR
;
UPDATE kontrak
SET nilai = 'A'
WHERE id = '1'
;
UPDATE kontrak
SET nilai = 'A'
WHERE id = '2'
;
UPDATE kontrak
SET nilai = 'A'
WHERE id = '3'
;
UPDATE kontrak
SET nilai = 'A'
WHERE id = '4'
;
insert into kontrak(nim, kodeMataKuliah, nip, nilai)
values('001', 'MK003', 'D002', 'A'),
('001', 'MK004', 'D003', 'B'),
('002', 'MK003', 'D002', 'A'),
('002', 'MK004', 'D003', 'D'),
('003', 'MK001', 'D001', 'D'),
('003', 'MK002', 'D002', 'A'),
('003', 'MK003', 'D003', 'D'),
('003', 'MK004', 'D002', 'A'),
('004', 'MK003', 'D002', 'B'),
('004', 'MK004', 'D003', 'A'),
('004', 'MK005', 'D001', 'A'),
('004', 'MK006', 'D002', 'B'),
('005', 'MK002', 'D003', 'A'),
('005', 'MK001', 'D001', 'A'),
('005', 'MK006', 'D002', 'D'),
('006', 'MK004', 'D003', 'A'),
('006', 'MK005', 'D001', 'D'),
('006', 'MK002', 'D002', 'A')
;

select mahasiswa.nama,
    matakuliah.nama,
    dosen.nama
from mahasiswa
    join kontrak on mahasiswa.nim = kontrak.nim
    join matakuliah on kontrak.kodeMataKuliah = matakuliah.kodeMataKuliah
    join dosen on kontrak.nip = dosen.nip;





SELECT mahasiswa.nama
, strftime ('%Y' , date('now')) - strftime ('%Y' , date(tanggal_lahir)) AS 'umur'
FROM mahasiswa
;


