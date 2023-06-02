
const TabInfo = ({img,title}) => {
    return (
        <div>
            <img className="mt-2 w-[1000px]" src={img} alt="" />
            <div className="mt-2">
                <p className="text-5xl font-semibold my-5">{title}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id, numquam quidem libero sunt quaerat, praesentium officia est incidunt eligendi, culpa quis. Iure laboriosam repudiandae nobis assumenda rerum dolorem. <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ducimus consectetur aspernatur numquam quaerat aliquam? Vero fugiat praesentium eius ipsum tempora officia doloribus quos architecto, quaerat, ut dolores adipisci unde deleniti debitis amet voluptas, laborum vitae.</p>
                <button className="btn btn-outline my-4 btn-warning">View Details</button>
            </div>
        </div>
    );
};

export default TabInfo;