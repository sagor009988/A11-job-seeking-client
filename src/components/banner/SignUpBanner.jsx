

const SignUpBanner = () => {
    return (
        <div className="bg-[#f2fff2] py-16">
            <div className="max-w-6xl mx-auto py-8 items-center grid grid-cols-1 md:grid-cols-2 justify-between">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl text-black font-bold">Your Dream Jobs Are Waiting</h2>
                    <p className="text-black mt-2">Unlock Your Career Aspirations Now</p>
                </div>
                <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                    <input className="py-2 w-3/6 px-2 rounded-l-sm" placeholder="Enter your email" type="email" />
                    <input className="py-2 px-6 bg-[#D2DE32] rounded-r-sm text-white" type="submit" value="SignUp" />
                </div>
            </div>
        </div>
    );
};

export default SignUpBanner;