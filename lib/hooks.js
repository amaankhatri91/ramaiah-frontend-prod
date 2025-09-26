import { useDispatch, useSelector } from 'react-redux';

// Custom hook for accessing services state
export const useServices = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  
  return {
    ...services,
    dispatch,
  };
};

export const useHeroSection = () => {
  const dispatch = useDispatch();
  const heroSection = useSelector((state) => state.heroSection);
  return { ...heroSection, dispatch };
};

export const useHomePage = () => {
  const dispatch = useDispatch();
  const homePage = useSelector((state) => state.homePage);
  return { ...homePage, dispatch };
};

export const useFooter = () => {
  const dispatch = useDispatch();
  const footer = useSelector((state) => state.footer);
  return { ...footer, dispatch };
};