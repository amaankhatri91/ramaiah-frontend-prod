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