import './index.css';
function HomeStatus() {
    return (
        <div>
        <h2 class="mt-4">Course Status</h2>
        <div class="mb-3 row">
            <div class="col">
                <button class="btn btn-secondary">Unpublished</button>
            </div>
            <div class="col">
                <button class="btn btn-success">Published</button>
            </div>
        </div>
        
        <ul class="list-group mb-4">
            <li class="list-group-item"><button className='btnCss'>Importing Existing content</button></li>
            <li class="list-group-item"><button className='btnCss'>Import from Commons</button></li>
            <li class="list-group-item"><button className='btnCss'>Choose from Home Page</button></li>
            <li class="list-group-item"><button className='btnCss'>View Course Stream</button></li>
            <li class="list-group-item"><button className='btnCss'>New Announcement</button></li>
            <li class="list-group-item"><button className='btnCss'>New Analytics</button></li>
            <li class="list-group-item"><button className='btnCss'>View Course Notifications</button></li>
        </ul>

        <h2 class="mt-4">Coming Up</h2>
        <button class="text-red mb-3 d-block">View Calendar</button>
        <ul class="list-unstyled">
            <li class="mb-1"><button className="text-red">Lecture CS5610 Sep7 at 11:45 am</button></li>
            <li class="mb-1"><button className="text-red">Lecture CS4550 Sep 11 at 11:45 am</button></li>
            <li class="mb-1"><button className="text-red">Lecture CS5610 Sep 11 at 6 pm</button></li>
        </ul>
</div>
    );
}
export default HomeStatus;