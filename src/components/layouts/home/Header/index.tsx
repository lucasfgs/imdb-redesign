import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import DropdownMenuDemo, {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuImage,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/layouts/home/Header/DropdownMenu";

import popcorn from "@/assets/images/popcorn.svg";
import tvShow from "@/assets/images/tv-show.svg";
import celebs from "@/assets/images/celebs.svg";

export default function Header() {
  return (
    <header className="flex justify-center h-[73px] items-center ">
      <nav className="max-w-[1442px] w-full max-h-[39px] flex items-center justify-center space-x-7">
        <Image priority src={logo} alt="logo" />
        <ul className="flex space-x-2.5">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger>Movies</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Top 250 Movies</DropdownMenuItem>
                  <DropdownMenuItem>Most Popular Movies</DropdownMenuItem>
                  <DropdownMenuItem>Top Box Office</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Release Calendar</DropdownMenuItem>
                  <DropdownMenuItem>Browse Movies by Genre</DropdownMenuItem>
                  <DropdownMenuItem>Movie News</DropdownMenuItem>
                  <DropdownMenuItem>Showtimes and Tickets</DropdownMenuItem>
                  <DropdownMenuItem>India Movie Spotlight</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuImage src={popcorn} alt="Porpcorn image" />
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger>TV Shows</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Top 250 Movies</DropdownMenuItem>
                  <DropdownMenuItem>Most Popular Movies</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuItem>What's on TV & Streaming</DropdownMenuItem>
                  <DropdownMenuItem>Browse TV Shows by Genre</DropdownMenuItem>
                  <DropdownMenuItem>TV News</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuImage src={tvShow} alt="TV Show image" />
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger>Celebs</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Most Popular Celebs</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Born Today</DropdownMenuItem>
                  <DropdownMenuItem>Celebrity News</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuImage src={celebs} alt="Celebs image" />
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          {/* <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">TV Shows</a>
          </li>
          <li>
            <a href="">Celebs</a>
          </li>
          <li>
            <a href="">Watch</a>
          </li>
          <li>
            <a href="">Awards</a>
          </li>
          <li>
            <a href="">Community</a>
          </li> */}
        </ul>
        <div>Search Bar</div>
        <div className="flex space-x-7">
          <a href="">Watchlist</a>
          <a href="">User</a>
          <a href="">Language</a>
        </div>
      </nav>
    </header>
  );
}
