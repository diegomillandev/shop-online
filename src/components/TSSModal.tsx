import {
    Box,
    IconButton,
    Modal,
    Rating,
    Tooltip,
    Typography,
} from '@mui/material';
import { ProductModalType } from '../types/Products';
import { AddShoppingCart } from '@mui/icons-material';

type TSSModalProps = {
    open: boolean;
    handleOpen: () => void;
    productoModal?: ProductModalType;
};
export const TSSModal = ({
    open,
    handleOpen,
    productoModal,
}: TSSModalProps) => {
    return (
        <Modal open={open} onClose={handleOpen}>
            <div className="absolute min-h-screen w-full bg-gray-950/60 z-50 flex justify-center items-center p-4">
                <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row gap-6 relative">
                    <span
                        className="absolute w-8 h-8 top-2 right-2 cursor-pointer text-xl font-bold mr-2 hover:bg-gray-200 rounded-full p-1 flex justify-center items-center"
                        onClick={handleOpen}
                    >
                        X
                    </span>
                    <img
                        src={productoModal?.image}
                        alt="image product"
                        className="w-[150px] sm:w-[250px] md:w-[300px] mx-auto object-contain"
                    />
                    <div className="max-w-[350px] flex flex-col">
                        <h4 className="text-xl font-bold mb-2 md:mt-5">
                            {productoModal?.title}
                        </h4>
                        <p className="text-xs md:text-sm flex-1">
                            Easy upgrade for faster boot up, shutdown,
                            application load and response (As compared to 5400
                            RPM SATA 2.5” hard drive; Based on published
                            specifications and internal benchmarking tests using
                            PCMark vantage scores) Boosts burst write
                            performance, making it ideal for typical PC
                            workloads The perfect balance of performance and
                            reliability Read/write speeds of up to
                            535MB/s/450MB/s (Based on internal testing;
                            Performance may vary depending upon drive capacity,
                            host device, OS and application.)
                        </p>

                        <Box
                            marginTop={1}
                            display={'flex'}
                            alignItems={'center'}
                            sx={{ marginY: 2 }}
                        >
                            <Box flexGrow={1}>
                                <Box
                                    display="flex"
                                    gap={0.5}
                                    alignItems="center"
                                >
                                    <Rating
                                        size="small"
                                        name="read-only"
                                        value={productoModal?.rating.rate}
                                        readOnly
                                    />
                                    <Typography
                                        variant="body2"
                                        component="div"
                                        fontSize={12}
                                        fontWeight={'medium'}
                                        color={'#9e9e9e'}
                                    >
                                        {`(${productoModal?.rating.count}reviews)`}
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection={'column'}
                                    alignItems="start"
                                    marginTop={1}
                                >
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        fontSize={18}
                                        fontWeight={'bold'}
                                    >
                                        <Typography
                                            component="span"
                                            color={'#e00d0d'}
                                            fontWeight={'medium'}
                                        >
                                            -{`${productoModal?.procentaje}`}%
                                        </Typography>{' '}
                                        ${productoModal?.price}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        fontSize={13}
                                        color={'#585858'}
                                        marginTop={-0.5}
                                    >
                                        List Price:{' '}
                                        <Typography
                                            component="span"
                                            sx={{
                                                textDecoration: 'line-through',
                                            }}
                                            fontSize={14}
                                        >
                                            {`$${
                                                productoModal?.price &&
                                                (
                                                    productoModal?.price *
                                                        (productoModal?.procentaje /
                                                            100) +
                                                    productoModal?.price
                                                ).toFixed(2)
                                            }`}
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                display={'flex'}
                                justifyContent={'end'}
                                alignSelf={'end'}
                            >
                                <Tooltip title="Add Cart" placement="top">
                                    <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="inherit"
                                        sx={{ position: 'relative' }}
                                    >
                                        <AddShoppingCart
                                            sx={{
                                                width: 30,
                                                height: 30,
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                position: 'absolute',
                                                bgcolor: '#ca1f1f',
                                                color: 'white',
                                                borderRadius: '50%',
                                                width: 15,
                                                height: 15,
                                                fontSize: 10,
                                            }}
                                            display={'none'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                            padding={1}
                                            top={2}
                                            right={4}
                                        >
                                            1
                                        </Typography>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
