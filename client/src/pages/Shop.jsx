import React, {useState} from "react";
import Helmet from "../components/Layout/Helmet";
import ProductList from "../components/ui/ProductList";
import products from "../assets/data/products";
import {Pagination} from "@mui/material";
import {paginate} from "../utils/paginate";

const Shop = () => {
	const [productsData, setProductsData] = useState(products);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [page, setPage] = useState(1);
	const pageSize = 8;

	const handleFilter = ({target}) => {
		console.log(target.value);
		if (target.value !== "") {
			const filteredProducts = products.filter((product) => product.category === target.value);
			setSelectedCategory(target.value);
			setProductsData(filteredProducts);
			setSearchQuery("");
			setPage(1);
		} else {
			setProductsData(products);
			setPage(1);
		}
	};

	const handleSearch = ({target}) => {
		setSearchQuery(target.value);
		const searchedProducts = products.filter((product) => product.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
		setProductsData(searchedProducts);
		setSelectedCategory("");
		setPage(1);
	};

	const handleSort = ({target}) => {
		if (target.value === "ascending") {
			setProductsData((prevProductsData) => [...prevProductsData].sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)));
		} else if (target.value === "descending") {
			setProductsData((prevProductsData) => [...prevProductsData].sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0)));
		}
		setPage(1);
	};

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const pageCount = Math.ceil(productsData.length / pageSize);

	let sliceData = paginate(productsData, page, pageSize);

	return (
		<Helmet title="Shop">
			<div className="h-44 bg-main flex items-center justify-center">
				<h2 className="text-main font-semibold text-white">Products</h2>
			</div>

			<section className="pt-4">
				<div className="container mx-auto px-1">
					<div className="flex flex-wrap gap-4 md:flex-row md:flex-nowrap md:gap-1">
						<div className="w-6/12 lg:w-3/12">
							<select onChange={handleFilter} value={selectedCategory} className="border-2 border-main rounded py-2 px-5 outline-none cursor-pointer">
								<option value="">Filter By Category</option>
								<option value="laptop">Laptop</option>
								<option value="mobile">Mobile</option>
								<option value="video card">Video card</option>
								<option value="clock">Clock</option>
							</select>
						</div>

						<div className="w-6/12 lg:w-3/12 ">
							<select className="py-2 px-5 border-main border-2 rounded outline-none cursor-pointer" onChange={handleSort}>
								<option>Sort By</option>
								<option value="ascending">Ascending</option>
								<option value="descending">Descending</option>
							</select>
						</div>

						<div className="w-12/12 lg:w-6/12 flex items-center justify-center border-2 border-main rounded px-2">
							<input type="text" placeholder="Search..." onChange={handleSearch} value={searchQuery} className="outline-none w-full h-full" />
							<span className="cursor-pointer text-xl active:scale-110">
								<i className="ri-search-line "></i>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-4">
				<div className="container pt-5 pb-4 mx-auto">
					<div className="lg:w-full flex items-center justify-center text-center">{sliceData.length === 0 ? <h1>No products are found!</h1> : <ProductList data={sliceData} />}</div>
				</div>
			</section>

			<div className="container mx-auto flex items-center justify-center h-16">
				<Pagination count={pageCount} page={page} onChange={handlePageChange} shape="rounded" />
			</div>
		</Helmet>
	);
};

export default Shop;
