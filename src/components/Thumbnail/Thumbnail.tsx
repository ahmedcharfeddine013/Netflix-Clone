/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Movie } from "../../../typings";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../../atoms/modalAtoms";

interface Props {
    // dovumentData when uding firebase
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-100 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105" onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
    </div>
  );
};

export default Thumbnail;
