import BrandsStyles from "components/Styles/Home/Brands/brands.styled";
import { connect } from "react-redux";
import { Paginate } from "./paginate.ui";

const brands = [
	{
		name: "Thất Nguyệt",
		image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/276984487_312201110841010_2174806510696609215_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=kFjhCZtvMsoAX_35cSJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLDQj9lSqeHsNOthcxwVq-nrv2U1-wzC8fYg_IwTOk-tg&oe=626ADA1B",
		description:
			"Một thương hiệu đến từ Trung Quốc, với chất lượng vải mềm mịn, cầm nặng tay cùng với màu sắc trẻ trung và năng động, Thất Nguyệt được nhiều giới trẻ yêu thích và tin dùng.",
		url: "https://www.nike.com/",
		models: ["Quần áo", "Phụ kiện"],
		location: null
	}
];

function BrandsUI(props: any): JSX.Element {
	return (
		<BrandsStyles.Main>
			<BrandsStyles.Title>All Brands</BrandsStyles.Title>
			<Paginate brands={brands} />
		</BrandsStyles.Main>
	);
}

export default connect((state: any) => state)(BrandsUI);
