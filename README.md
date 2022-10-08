# Car Management Api

Challenge Chapter 5 Full Stack Web Binar Academy 

## Start

Untuk memulai aplikasi ini lakukan perintah `npm run start` pada terminal. Jika ingin dijalankan dengan nodemon dapat dilakukan perintah `npm run live`

## Request
Dalam aplikasi ini terdapat beberapa request sebagai berikut:

### View Halaman Awal
Untuk menampilkan halaman awal terdapat pada `http://localhost:8000/`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194706457-0e004ca8-59a2-4646-80bb-e79b34af5974.png">

### View Halaman Tambah Mobil Baru
Untuk menampilkan halaman Tambah Mobil Baru dapat menekan tombol "Add New Car" pada halaman di atas, atau dapat menuju url `http://localhost:8000/add`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194706787-bd368ee5-9810-424b-a274-bf71042275e8.png">

### View Halaman Edit Mobil
Untuk menampilkan halaman Tambah Edit Mobil dapat menekan tombol "Edit" di halaman awal pada mobil yang ingin di-edit, atau dapat menuju url `http://localhost:8000/update/:id`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194706747-322904f5-ac1e-4bee-ab1b-2c1b59bb58ee.png">

### API Get All Cars
Untuk mendapatkan semua data mobil dapat dilakukan request `http://localhost:8000/api/` dengan method `GET`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194706995-2309225a-db66-488b-b8fb-788791f0b63b.png">

### API Get Car By Id
Untuk mendapatkan data mobil berdasarkan id-nya dapat dilakukan request `http://localhost:8000/api/:id` dengan method `GET`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194707065-b5435589-4ce5-4210-bac2-9a234eb5d3d5.png">

### API Post New Car
Untuk menambahkan data baru dapat dilakukan request `http://localhost:8000/api/` dengan method `POST`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194707128-a9c183db-fd82-4acb-9fe8-808054e21b3e.png">

### API Update Car
Untuk meng-update data mobil dilakukan request berdasarkan id sebagai berikut `http://localhost:8000/api/:id` dengan method `PUT`
</br></br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/87472849/194707214-d055f4fa-e007-403e-8d2f-01209f93e4f6.png">

### API Delete Car
Untuk menghapus data mobil dapat dilakukan request berdarakan id sebagai berikut `http://localhost:8000/api/:id` dengan method `DELETE`
</br></br>
<img width="641" alt="image" src="https://user-images.githubusercontent.com/87472849/194707263-f1142cf9-4e64-46b6-9857-691efc9466d0.png">

## Entity Relationship Diagram
Data pada aplikasi ini disimpan dalam tabel bernama `cars`. Atribut dari tabel ini terdapat primary key dengan auto fill yaitu `id` dengan tipe data integer, dan atribut lainnya yaitu `name` tipe data varchar(255), `rent` tipe data integer, `size` tipe data varchar(255), `createdAt` dan `updatedAt` dengan tipe data DateTime. Berikut merupakan diagram tabel cars:
</br></br>
<img width="222" alt="image" src="https://user-images.githubusercontent.com/87472849/194707759-d67ee507-a3ed-43c2-a1a6-359f7221867d.png">






