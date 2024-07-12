import Counter from "@/components/Counter";

const Reviews = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center py-10 gap-10 text-center'>
                <div className='text-primary-900 font-semibold text-4xl'>
                    Thank you for being on a journey with us
                </div>
                <div className='text-secondary-600 text-lg'>
                    We could not hav achieved great wonders without our lovely clients
                </div>
            </div>
            <div className="nicolas_sm_counter" id="counter">
                <div className="container">
                    <div className="extra_container">
                        <div className="counter_in">
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"/>
                                        <div className="box">
                                            <div className="icon">
                                                <img src="/img/home/users-group.png" alt={1}/>
                                            </div>
                                            <div className="title">
                                                <span>System Users</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={801}
                              data-speed={1500}
                          >
                            <Counter end={801}/>
                          </span>

                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"></div>
                                        <div className="box">
                                            <div className="icon">
                                                <img src="/img/home/mood-smile.png" alt={2}/>
                                            </div>
                                            <div className="title">
                                                <span>Happy Customers</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={507}
                              data-speed={1500}
                          >
                            <Counter end={507}/>
                          </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"></div>
                                        <div className="box">
                                            <div className="icon">
                                                <img src="/img/home/rocket.png" alt={3}/>
                                            </div>
                                            <div className="title">
                                                <span>Implemented Projects</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={23}
                              data-speed={1500}
                          >
                            <Counter end={23}/>
                          </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
